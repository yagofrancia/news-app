import { createStore, combineReducers } from 'redux';
import main from '../reducers/main';

const reducer = combineReducers({
  main
});

const store = createStore(reducer);

export default store;
