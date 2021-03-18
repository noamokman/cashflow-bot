import {createBackMainMenuButtons, MenuTemplate} from 'telegraf-inline-menu';
import type {AppContext} from '../../../../types';
import addSubmenu from './add';

const menuTemplate = new MenuTemplate<AppContext>('Credentials');

menuTemplate.submenu('➕ Add credentials', 'add', addSubmenu);

menuTemplate.manualRow(createBackMainMenuButtons());

export default menuTemplate;