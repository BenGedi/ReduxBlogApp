import { FETCH_POSTS } from '../actions/index';

// all posts, a single post
const INITIAL_STATE = { all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    debugger;
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
