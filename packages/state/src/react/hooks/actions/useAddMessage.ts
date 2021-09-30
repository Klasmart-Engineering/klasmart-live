import { useContext, useState } from 'react';
import NetworkContext from '../../context';

export interface AddMessageHook {
    addMessage: (message: string) => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useAddMessage(): AddMessageHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const addMessage = async (message: string) => {
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
    return { addMessage, result, loading, error };
};
