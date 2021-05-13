import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types/index.js';
import addSubmenu from './add.js';

const menuTemplate = new MenuTemplate<AppContext>('Credentials');

menuTemplate.submenu('➕ Add credentials', 'add', addSubmenu);

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;