import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/usersTable';
import { CreateUser, deleteUser } from '../lib/actions';
import AddUser from '../components/AddUser';

const UsersPage = async () => {

    const users = await getUsers();

    console.log(users);
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-2 mb-4'>
                <h2>User Management System</h2>
                <p>total users: {users.length}</p>
                <AddUser createUserAction = {CreateUser} />
            </div>
            <UsersTable users={users} handleUserAction={deleteUser} />
        </div>
    );
};

export default UsersPage;