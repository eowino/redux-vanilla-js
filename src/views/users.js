// @ts-check
const AddUserInput = () =>
  `<input type="text" name="addUser" placeholder="Add a user">`;

const UserList = (users = []) =>
  `<ul class="user-list">
        ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>`;

const Users = users =>
  `<div class="users">
        <div>${AddUserInput()}</div>
        <h1>Users</h1>
        ${UserList(users)}      
    </div>`;

export default class WithUsers {
  constructor(props = {}) {
    this.props = props;
  }

  handleAddUser(container) {
    const input = container.querySelector('input');
    input.addEventListener('keyup', e => {
      const isEnterKey = e.which === 13;
      const value = e.target.value;

      if (isEnterKey && value.length > 0) {
        console.log('value', value);
      }
    });
  }
  
  render() {
    const container = document.createElement('div');
    container.innerHTML = Users(this.props.users);
    this.handleAddUser(container);

    return container;
  }
}
