import { useContext, useState } from 'react';
import NetworkContext from './context';
import * as pb from 'kidsloop-live-serialization';


export interface ActionHook {
  [name: string]: <T extends pb.IAction>(payload: T) => Promise<void>,
  result: boolean,
  loading: boolean,
  error: unknown,
};

export function createActionHook<T extends pb.IAction>(name: string) {
  return () => {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const callback = async (payload: T) => {
        try {
            setLoading(true);
            await network.send(payload);
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { [name]: callback, result, loading, error };
  };
};
