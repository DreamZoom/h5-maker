/**
 * Created by Soup Tang on 2016/4/25.
 */
import Values from '../helper/Values';
import AppStore from '../helper/AppStore';

export const add = AppStore.makeActionCreator(Values.PAGES.ADD);
export const doDelete = AppStore.makeActionCreator(Values.PAGES.DELETE, 'page');
export const active = AppStore.makeActionCreator(Values.PAGES.ACTIVE, 'page');
export const setBackgroundColor = AppStore.makeActionCreator(Values.PAGES.SET_BACKGROUND_COLOR, 'color');
export const setFontSize = AppStore.makeActionCreator(Values.CONTROL.SET_FONT_SIZE, 'size');
