import type { AppContext } from '../../types/index.js';
import { menuMiddleware } from '../menus/main/index.js';

export const main = (ctx: AppContext) => menuMiddleware.replyToContext(ctx);
