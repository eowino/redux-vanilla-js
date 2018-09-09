// @ts-check
import { createStore } from 'redux';
import allReducers from './src/reducers/index';

import Users from './src/components/containers/Users';

const root = document.getElementById('root');
const store = createStore(allReducers);

function renderUsers() {
  root.innerHTML = '';
  root.appendChild(new Users({ store }).render());
}

renderUsers();

store.subscribe(() => renderUsers());
