import type { CompanyTypes } from 'israeli-bank-scrapers';
import type { Context } from 'grammy';
import type { Logger } from 'pino';
import type { LowWithLodash } from '../framework/db.js';
import type { Entity } from './entity.js';
import type { Integration } from './integrations.js';
import type { Credentials } from './credentials.js';

export interface AppContext extends Context {
  db: LowWithLodash<Database>;
  log: Logger;
  readonly match: RegExpExecArray | undefined;
  userId: number;
}

export interface ScraperRecord extends Entity {
  name: CompanyTypes;
  login: Record<string, string>;
}

export interface Database {
  scrapers: ScraperRecord[];
  integrations: Integration[];
  credentials: Credentials[];
  ongoing: {
    integration: Partial<Integration>;
    credentials: Partial<Credentials>;
  };
}
