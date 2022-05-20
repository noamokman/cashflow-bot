import type { Context } from 'grammy';
import type { Logger } from 'pino';
import type { LowWithLodash } from '../framework/db.js';
import type { Integration } from './integrations.js';
import type { Credentials } from './credentials.js';

export interface AppContext extends Context {
  db: LowWithLodash<Database>;
  log: Logger;
  readonly match: RegExpExecArray | undefined;
  userId: number;
}

export interface Database {
  integrations: Integration[];
  credentials: Credentials[];
  ongoing: {
    integration: Partial<Integration>;
    credentials: Partial<Credentials>;
  };
}
