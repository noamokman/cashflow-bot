import type {CompanyTypes} from 'israeli-bank-scrapers';
import type {Context} from 'telegraf';
import type {LowdbAsync} from 'lowdb';
import type {Logger} from 'pino';

export interface AppContext extends Context {
  db: LowdbAsync<Database>;
  log: Logger;
  readonly match: RegExpExecArray | undefined;
}

export interface ScraperRecord {
  user: number;
  name: CompanyTypes;
  login: Record<string, string>;
}

export interface Database {
  scrapers: ScraperRecord[];
}