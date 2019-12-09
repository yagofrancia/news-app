import { SET_NEWS_DATA, SET_FILTER_BY_SOURCE, SET_ITEMS_TO_DISPLAY } from './types';

export const setNewsData = payload => ({
  type: SET_NEWS_DATA,
  payload
});

export const setFilterBySource = payload => ({
  type: SET_FILTER_BY_SOURCE,
  payload
});

export const setItemsToDisplay = payload => ({
  type: SET_ITEMS_TO_DISPLAY,
  payload
});
