// @ts-check
import { combineReducers } from 'redux';
import cars from './cars';
import users from './users'

export default combineReducers({
    cars,
    users
});