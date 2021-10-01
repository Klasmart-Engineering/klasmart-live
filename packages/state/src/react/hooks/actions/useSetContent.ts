import { useContext, useState } from 'react';
import NetworkContext from '../../context';
import * as pb from '../../../protobuf';

export interface SetContentHook {
    setContent: (content: pb.Content) => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useSetContent(): SetContentHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const setContent = async (content: pb.Content) => {
        try {
            setLoading(true);
            await network.send({
              setContent: {
                content
              }
            });
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { setContent, result, loading, error };
};
