// @ts-check
import { createStore } from 'redux';
import allReducers from './src/reducers/index';

import Users from './src/views/users';

const root = document.getElementById('root');
const store = createStore(allReducers);

console.log(store.getState());

const test = {
    users: [
        { name: 'Bob' },
        { name: 'Sue' },
        { name: 'Dave' },
        { name: 'Chris' },
    ]
}

root.appendChild(new Users(test).render());