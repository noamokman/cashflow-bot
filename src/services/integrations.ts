import type {AppContext} from '../types/index.js';
import type {Integration} from '../types/integrations.js';

export const getUserIntegrations = (ctx: AppContext): Integration[] => ctx.db.get('integrations').filter({userId: ctx.userId})
  .value();