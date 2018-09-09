// @ts-check
import { ADD_CAR, REMOVE_CAR } from '../actions/cars';

export default function userReducer(state = [], { type, payload }) {
    switch(type) {
        case ADD_CAR:
            return [
                ...state,
                payload
            ];
        case REMOVE_CAR:
            return state.filter(car => car.name !== payload.name);
        default:
            return state;
    }
}