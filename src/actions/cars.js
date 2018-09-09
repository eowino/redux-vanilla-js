// @ts-check
export const ADD_CAR = 'ADD_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

export function addCar({ name, colour }) {
    return {
        type: ADD_CAR,
        payload: {
            name,
            colour
        }
    }
}

export function removeCar({ name }) {
    return {
        type: REMOVE_CAR,
        payload: {
            name,
        }
    }
}