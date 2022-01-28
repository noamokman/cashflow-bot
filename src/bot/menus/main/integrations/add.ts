import { createBackMainMenuButtons, MenuTemplate } from 'telegraf-inline-menu';
import type { AppContext } from '../../../../types/index.js';

const menuTemplate = new MenuTemplate<AppContext>('➕ Add an integration');

const submenuTemplate = new MenuTemplate<AppContext>((ctx) => `Add a new ${ctx.match?.[1]} integration`);

submenuTemplate.interact('Set cron text', 'unique', {
  do: async (ctx) => ctx.answerCbQuery('You hit a button in a submenu'),
});
submenuTemplate.manualRow(createBackMainMenuButtons());

menuTemplate.chooseIntoSubmenu('type', ['Balance Check', 'Transactions Reporting'], submenuTemplate);

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;
