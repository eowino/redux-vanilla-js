import Users from '../views/Users';
import { addUser } from '../../actions/users';

// @ts-check
export default class WithUsers {
  constructor(props = {}) {
    this.props = props;
    this.store = this.props.store;
  }

  getUsers() {
    return this.store.getState().users;
  }

  handleAddUser(container) {
    const input = container.querySelector('input');
    input.addEventListener('keyup', e => {
      const isEnterKey = e.which === 13;
      const value = e.target.value;

      if (isEnterKey && value.length > 0) {
        this.store.dispatch(addUser(value));
        e.target.value = '';
      }
    });
  }

  render() {
    const container = document.createElement('div');
    container.innerHTML = Users(this.getUsers());
    this.handleAddUser(container);

    return container;
  }
}
