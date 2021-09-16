
import { useContext, useState } from 'react';
import NetworkContext from './context';

export interface JoinClassHook {
    result: boolean,
    loading: boolean,
    joinClass: (url: string) => Promise<void>
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
    return { result, loading, joinClass };
};
