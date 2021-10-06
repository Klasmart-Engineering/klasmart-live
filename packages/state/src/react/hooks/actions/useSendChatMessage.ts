import { useContext, useState } from 'react';
import NetworkContext from '../../context';

export interface SendChatMessageHook {
    sendChatMessage: (message: string) => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useSendChatMessage(): SendChatMessageHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const sendChatMessage = async (message: string) => {
        try {
            setLoading(true);
            // await network.send();
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { sendChatMessage, result, loading, error };
};
