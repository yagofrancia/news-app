import { SET_NEWS_DATA, SET_FILTER_BY_SOURCE, SET_ITEMS_TO_DISPLAY } from '../actions/types';

const init = {
  data: [],
  sources: [],
  activeSourceSelected: '',
  itemsToDisplay: 5
};

export default (state = init, action) => {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        ...state,
        data: action.payload.data,
        sources: action.payload.sources
      };
    case SET_FILTER_BY_SOURCE:
      return {
        ...state,
        activeSourceSelected: action.payload,
        itemsToDisplay: 5
      };
    case SET_ITEMS_TO_DISPLAY:
      return {
        ...state,
        itemsToDisplay: action.payload
      };
    default:
      return state;
  }
};
