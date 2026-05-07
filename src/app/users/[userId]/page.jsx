import { getUserById } from '@/app/lib/data';
import React from 'react';

const userDetails = async ({ params }) => {

    const { userId } = await params;
    const user =await getUserById(userId);
    return (
        <div className='p-10 bg-amber-100 flex flex-col gap-4 items-center justify-center'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.role}</p>
        </div>
    );
};

export default userDetails;