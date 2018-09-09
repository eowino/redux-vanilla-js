// @ts-check
const AddUserInput = () =>
  `<input type="text" name="addUser" placeholder="Add a user">`;

const UserList = (users = []) =>
  `<ul class="user-list">
        ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>`;

export default users =>
  `<div class="users">
        <div>${AddUserInput()}</div>
        <h1>Users</h1>
        ${UserList(users)}      
    </div>`;
