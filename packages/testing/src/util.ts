import { v4 as uuid } from 'uuid';

export async function sleep(ms: number): Promise<null> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateHtmlId(): string {
  let id = uuid().toString();
  while (id.includes('-')) {
    id = id.replace('-', '');
  }
  return `graph-${id}`;
}
