// @ts-check
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const GET_USERS = 'GET_USERS';

export function addUser(name) {
  return {
    type: ADD_USER,
    payload: {
      name
    }
  };
}

export function removeUser(name) {
  return {
    type: REMOVE_USER,
    payload: {
      name
    }
  };
}

export function getUsers() {
  return {
    type: GET_USERS,
    payload: {}
  };
}
