import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types';

const menuTemplate = new MenuTemplate<AppContext>('Credentials');

menuTemplate.interact('Add credentials', 'unique', {
  do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
});

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;