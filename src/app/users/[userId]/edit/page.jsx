import { updateuser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);

    const updateUserWraper = async (formdata) =>{
        'use server'
        return updateuser(userId, formdata);
    }

    return (
        <div className='space-y-4'>
            <h2 className='text-center'>Editing User: {user.name} </h2>

            <form action={updateUserWraper} className="flex flex-col gap-4 w-1/2 mx-auto bg-red-100 p-10 rounded-2xl">

                <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>

                <TextField className="w-full" name="role" defaultValue={user?.role} type="text">
                    <Label>Role</Label>
                    <Input placeholder="Enter user role" />
                </TextField>

                <div className='space-x-2'>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type='submit' slot="close">Edit User</Button>
                </div>

            </form>
        </div>
    );
};

export default UserEditPage;