import type {CompanyTypes} from 'israeli-bank-scrapers';
import type {Entity} from './entity';

export interface Credentials extends Entity {
  type: CompanyTypes;
  login: Record<string, string>;
}