import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/usersTable';
import { deleteUser } from '../lib/actions';

const UsersPage = async () => {

    const users = await getUsers();

    console.log(users);
    return (
        <div>
            <h2 className='text-center'>User Management System</h2>
            <p className='text-center'>total users: {users.length}</p>
            <UsersTable users={users} handleUserAction = {deleteUser} />
        </div>
    );
};

export default UsersPage;