import type {AppContext} from '../../types';
import {menuMiddleware} from '../menus/main';

export default (ctx: AppContext) => menuMiddleware.replyToContext(ctx);