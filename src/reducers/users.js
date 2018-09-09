// @ts-check
import { ADD_USER, REMOVE_USER } from '../actions/users';

export default function userReducer(state = [], { type, payload }) {
    switch(type) {
        case ADD_USER:
            return {};
        case REMOVE_USER:
            return state.filter(user => user.name !== payload.name);
        default:
            return state;
    }
}