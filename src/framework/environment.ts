import 'dotenv/config';
import env from 'env-var';

export const BOT_TOKEN = env.get('BOT_TOKEN')
  .required()
  .asString();

export const DB_PATH = env.get('DB_PATH')
  .required()
  .asString();

export const ALLOWLIST_USERS = env.get('ALLOWLIST_USERS')
  .required()
  .asArray()
  .map(Number.parseInt);