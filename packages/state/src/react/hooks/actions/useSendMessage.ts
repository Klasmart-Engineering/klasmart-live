import { useContext, useState } from 'react';
import NetworkContext from '../../context';

export interface SendMessageHook {
    sendMessage: (message: string) => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useAddMessage(): SendMessageHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message: string) => {
        try {
            setLoading(true);
            await network.send({
              sendChatMessage: {
                message
              }
            });
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, result, loading, error };
};
