import { IStateDiff, IState, IParticipant } from "kidsloop-live-serialization";

// Potential protocol flow
//
// Websocket
// -> Accept Text
// -> Accept Binary
//
// addEventListener('onmessage', msg => {
//    const payload = Protobuf.Action.decode(msg);
//    const action = wrapPayloadWithContext(payload, context);
//
//    const storeAction: PayloadAction;
//    switch payload.type() {
//      case "userJoin":
//        storeAction = userJoin(action);
//    };
//
//    store.dispatch(storeAction);
//    epochCounter += 1;
//
//    ws.send(ActionReceipt { epoch, epochCounter, actionId })
// })

type ParticipantMap = { [k: string]: IParticipant };

export function generateStateDiff(old: IState, latest: IState): IStateDiff[] {
  const differences = parseParticipants(
    old.participants!,
    latest.participants!
  );

  if (old.chatMessages!.length < latest.chatMessages!.length) {
    differences.push({
      appendChatMessage: {
        messages: latest.chatMessages!.slice(
          Math.max(old.chatMessages!.length, 0)
        ),
      },
    });
  }
  if (old.host !== latest.host) {
    differences.push({ changeHost: { hostId: latest.host } });
  }
  if (old.content !== latest.content) {
    differences.push({ changeContent: { content: latest.content } });
  }
  if (latest.endTimestamp || 0 > 0) {
    differences.push({ classEnded: {} });
  }
  return differences;
}

function parseParticipants(
  old: ParticipantMap,
  latest: ParticipantMap
): IStateDiff[] {
  const differences = [];
  const oldKeys = new Set(Object.keys(old));
  const newKeys = Object.keys(latest);
  const addParticipants: ParticipantMap = {};

  for (const userId of newKeys) {
    if (!oldKeys.has(userId)) {
      addParticipants[userId] = latest[userId];
      continue;
    }
    if (old[userId] !== latest[userId]) {
      addParticipants[userId] = latest[userId];
    }
    oldKeys.delete(userId);
  }

  if (Object.keys(addParticipants).length > 0) {
    differences.push({ addParticipants: { participants: addParticipants } });
  }
  if (oldKeys.size > 0) {
    differences.push({ removeParticipants: { participants: [...oldKeys] } });
  }

  return differences;
}
