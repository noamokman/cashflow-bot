import type {CompanyTypes} from 'israeli-bank-scrapers';
import type {Context} from 'telegraf';
import type {LowdbAsync} from 'lowdb';
import type {Logger} from 'pino';
import type {Entity} from './entity';
import type {Integration} from './integrations';
import type {Credentials} from './credentials';

export interface AppContext extends Context {
  db: LowdbAsync<Database>;
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