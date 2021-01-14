import 'dotenv/config';
import env from 'env-var';

export const BOT_TOKEN = env.get('BOT_TOKEN')
  .required()
  .asString();