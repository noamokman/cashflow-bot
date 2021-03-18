import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import {SCRAPERS} from 'israeli-bank-scrapers';
import type {AppContext} from '../../../../types';

const menuTemplate = new MenuTemplate<AppContext>('➕ Add credentials');

const submenuTemplate = new MenuTemplate<AppContext>(ctx => `Add a new ${ctx.match?.[1]} credentials`);

submenuTemplate.interact('Name?', 'name', {
  do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
});

submenuTemplate.select('login', ctx => {
  const key = ctx.match?.[1] as keyof typeof SCRAPERS | undefined;

  if (!key) {
    return [];
  }

  return SCRAPERS[key].loginFields;
}, {
  async isSet (ctx, loginField) {
    console.log(ctx, loginField);

    return loginField === '';
  },
  set: (ctx, loginField) => {
    console.log(ctx, loginField);

    return true;
  }
});

submenuTemplate.interact('Save', 'save', {
  do: async ctx => ctx.answerCbQuery('You hit a button in a submenu')
});

submenuTemplate.manualRow(createBackMainMenuButtons());

menuTemplate.chooseIntoSubmenu('type', Object.fromEntries(Object.entries(SCRAPERS).map(([key, {name}]) => [key, name])), submenuTemplate, {columns: 2});

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;