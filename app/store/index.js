import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    main: ''
})

const store = createStore(reducer);

export default store;