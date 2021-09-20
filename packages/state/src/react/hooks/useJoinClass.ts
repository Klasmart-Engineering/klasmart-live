import { useContext, useState } from 'react';
import NetworkContext from '../context';

export interface JoinClassHook {
    joinClass: (url: string) => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useJoinClass(): JoinClassHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const joinClass = async (url:string) => {
        try {
            setLoading(true);
            await network.initWs(url);
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { joinClass, result, loading, error };
};
