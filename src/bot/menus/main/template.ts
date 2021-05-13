import {deleteMenuFromContext, MenuTemplate} from 'telegraf-inline-menu';
import {readPackageUpAsync} from 'read-pkg-up';
import type {AppContext} from '../../../types/index.js';
import integrations from './integrations/index.js';
import credentials from './credentials/index.js';

const menuTemplate = new MenuTemplate<AppContext>(ctx => `Hey ${ctx.from?.first_name}!`);

menuTemplate.submenu('⛓ Integrations', 'integrations', integrations);

menuTemplate.submenu('🗝️ Credentials', 'credentials', credentials);

menuTemplate.interact('❔ About', 'about', {
  do: async ctx => {
    const data = await readPackageUpAsync();

    await ctx.reply(`🤖 Hey! I am Cashflow, version: ${data?.packageJson?.version ?? '0.0.0'}`);
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