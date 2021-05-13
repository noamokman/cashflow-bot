import {createBackMainMenuButtons, deleteMenuFromContext, getMenuOfPath, MenuTemplate} from 'telegraf-inline-menu';
import {SCRAPERS} from 'israeli-bank-scrapers';
import type {AppContext} from '../../../../types/index.js';
import {getOngoingCredentials} from '../../../../services/credentials.js';
import {nameQuestion} from '../../../questions/name.js';

const menuTemplate = new MenuTemplate<AppContext>('➕ Add credentials');

const submenuTemplate = new MenuTemplate<AppContext>(ctx => `Add a new ${ctx.match?.[1]} credentials`);

submenuTemplate.interact(ctx => {
  const {name} = getOngoingCredentials(ctx);

  return name ? `Name: ${name}` : 'Name?';
}, 'name', {
  async do (ctx, path) {
    const text = 'Choose a name for a new credentials';
    const additionalState = getMenuOfPath(path);

    await nameQuestion.replyWithMarkdown(ctx, text, additionalState);
    await deleteMenuFromContext(ctx);

    return false;
  }
});

submenuTemplate.select('login', ctx => {
  const key = ctx.match?.[1] as keyof typeof SCRAPERS | undefined;

  if (!key) {
    return [];
  }

  return SCRAPERS[key].loginFields;
}, {
  async isSet (ctx, loginField) {
    const {login} = getOngoingCredentials(ctx);

    return !!login?.[loginField];
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