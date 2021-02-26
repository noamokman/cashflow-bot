import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types';

const menuTemplate = new MenuTemplate<AppContext>('Integrations');

menuTemplate.interact('Text', 'unique', {
  do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
});

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;