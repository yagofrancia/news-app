import { SET_NEWS_DATA } from '../actions/types';

const init = {
    data: []
}

export default (state = init, action) => {
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}