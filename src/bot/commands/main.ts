import type {AppContext} from '../../types/index.js';
import {menuMiddleware} from '../menus/main/index.js';

export default (ctx: AppContext) => menuMiddleware.replyToContext(ctx);