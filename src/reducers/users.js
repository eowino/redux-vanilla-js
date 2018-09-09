// @ts-check
import { ADD_USER, REMOVE_USER } from '../actions/users';

const initialState = [{ name: 'Ann' }, { name: 'Bob' }];

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case REMOVE_USER:
      return state.filter(user => user.name !== payload.name);
    default:
      return state;
  }
}
