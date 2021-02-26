import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types';

const menuTemplate = new MenuTemplate<AppContext>('Integrations');

menuTemplate.interact('Add integration', 'add', {
  do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
});

menuTemplate.interact(
  ctx => {
    const integrationsCount = ctx.db.get('integrations')
      .size()
      .value();

    return integrationsCount ? `Show integrations (${integrationsCount} configured)` : 'No integrations configured yet';
  },
  'list',
  {
    do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
  });

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;