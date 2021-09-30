import { useSelector } from 'react-redux';
import { useNetwork } from '../useNetwork';

export function useMessages(): string[] {
  const network = useNetwork();
  // casting as any is temporary to make TS happy in WIP branch
  return useSelector((state) => (network.selector(state).network as any).messages || []);
}