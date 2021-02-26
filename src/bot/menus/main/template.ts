import {deleteMenuFromContext, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../types';
import {version} from '../../../framework/environment';
import integrations from './integrations';
import credentials from './credentials';

const menuTemplate = new MenuTemplate<AppContext>(ctx => `Hey ${ctx.from?.first_name}!`);

menuTemplate.submenu('⛓ Integrations', 'integrations', integrations);

menuTemplate.submenu('🗝️ Credentials', 'credentials', credentials);

menuTemplate.interact('❔ About', 'about', {
  do: async ctx => {
    await ctx.reply(`🤖 Hey! I am Cashflow, version: ${version}`);
    await deleteMenuFromContext(ctx);

    return false;
  }
});

menuTemplate.interact('🪁 Close', 'close', {
  do: async ctx => {
    await deleteMenuFromContext(ctx);

    return false;
  }
});


export default menuTemplate;