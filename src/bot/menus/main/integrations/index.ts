import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types';
import {getUserIntegrations} from '../../../../services/integrations';
import addSubmenu from './add';

const menuTemplate = new MenuTemplate<AppContext>('Integrations');

menuTemplate.submenu('➕ Add an integration', 'add', addSubmenu);

menuTemplate.interact(
  ctx => {
    const integrationsCount = getUserIntegrations(ctx).length;

    return integrationsCount ? `📰 Show integrations (${integrationsCount} configured)` : '⛔ No integrations configured yet';
  },
  'list',
  {
    do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
  });

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;