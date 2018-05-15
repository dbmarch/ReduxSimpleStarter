import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


export default function (state = {}, action ) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            // need to transform the array into an object.
        
        case FETCH_POST:
            // ES5 solution:
            // const post = action.payload.data;
            // const newState = {...state };
            // newState[post.id] = post;
            // return newState;
            // ES6 solution:
            return { ...state, [action.payload.data.id]: action.payload.data};

        case DELETE_POST:
            return _.omit(state, action.payload);
            //return { ...state};


        default:
            return state;
    }
}