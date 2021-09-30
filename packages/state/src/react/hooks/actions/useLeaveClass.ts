
import { useContext, useState } from 'react';
import NetworkContext from '../../context';

export interface LeaveClassHook {
    leaveClass: () => Promise<void>
    result: boolean,
    loading: boolean,
    error: unknown,
};

export function useLeaveClass(): LeaveClassHook {
    const network = useContext(NetworkContext);
    const [result, setResult] = useState(false);
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(false);

    const leaveClass = async (reason?: string) => {
        try {
            setLoading(true);
            await network.close(reason);
            setResult(true);
        } catch(e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };
    return { leaveClass, result, loading, error };
};
