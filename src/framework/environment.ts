import 'dotenv/config.js';
import env from 'env-var';

export const botToken = env.get('BOT_TOKEN').required().asString();

export const dbPath = env.get('DB_PATH').required().asString();

export const allowlistUsers = env.get('ALLOWLIST_USERS').default('').asArray().map(Number.parseInt);
