import { createBackMainMenuButtons, MenuTemplate } from 'grammy-inline-menu';
import type { AppContext } from '../../../../types/index.js';
import { getUserIntegrations } from '../../../../services/integrations.js';
import addSubmenu from './add.js';

const menuTemplate = new MenuTemplate<AppContext>('Integrations');

menuTemplate.submenu('➕ Add an integration', 'add', addSubmenu);

menuTemplate.interact(
  (ctx) => {
    const integrationsCount = getUserIntegrations(ctx).length;

    return integrationsCount ? `📰 Show integrations (${integrationsCount} configured)` : '⛔ No integrations configured yet';
  },
  'list',
  {
    do: async (ctx) => ctx.answerCallbackQuery('You hit a button in a submenu'),
  },
);

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;
