import React, {useEffect, useState} from 'react'
import {getUsers} from '../../Api';

const UserList = () => {
  const [users, getUsers] = useState([]);

  useEffect(() => {
    getUsers().then(respone =>{
      setUsers(respone.data);
    }).catch(error =>{
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}-${user.email}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
