import 'dotenv/config';
import env from 'env-var';
import {version as versionFromPackage} from '../../package.json';

export const botToken = env.get('BOT_TOKEN')
  .required()
  .asString();

export const dbPath = env.get('DB_PATH')
  .required()
  .asString();

export const allowlistUsers = env.get('ALLOWLIST_USERS')
  .default('')
  .asArray()
  .map(Number.parseInt);

export const version = env.get('VERSION')
  .default(versionFromPackage)
  .asString();