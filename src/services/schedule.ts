import { scheduleJob } from 'node-schedule';
import { getDb } from '../framework/db.js';

export const init = async () => {
  const db = await getDb();

  db.chain
    .get('integrations')
    .filter({ enabled: true, type: 'balanceCheck' })
    .value()
    .forEach(({ payload: { cron } }) => {
      scheduleJob(cron, () => {
        console.log('cron running!');
      });
    });
};
