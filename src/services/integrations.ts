import type {AppContext} from '../types';
import type {Integration} from '../types/integrations';

export const getUserIntegrations = (ctx: AppContext): Integration[] => ctx.db.get('integrations').filter({userId: ctx.userId})
  .value();