// @ts-check
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export function addUser({ name, title }) {
    return {
        type: ADD_USER,
        payload: {
            title,
            name
        }
    }
}

export function removeUser({ name }) {
    return {
        type: REMOVE_USER,
        payload: {
            name,
        }
    }
}