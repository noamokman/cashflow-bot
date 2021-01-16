import type {CompanyTypes} from 'israeli-bank-scrapers';
import type {Context} from 'telegraf';
import type {LowdbAsync} from 'lowdb';

export interface AppContext extends Context {
  db: LowdbAsync<Database>;
}

export interface ScraperRecord {
  user: number;
  name: CompanyTypes;
  login: Record<string, string>;
}

export interface Database {
  scrapers: ScraperRecord[];
}