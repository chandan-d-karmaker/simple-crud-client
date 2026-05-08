import { revalidatePath } from "next/cache";

export const CreateUser = async(formData) =>{
    'use server';

    const newUser = Object.fromEntries(formData.entries());
    console.log("new user data: ", newUser);

    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();
    console.log(data);

    if(data.insertedId){
        revalidatePath('/users');
    }

    return data;
}

export const updateuser = async(formdata) =>{
    'use server'

    const updatedUser = Object.fromEntries(formdata.entries());

    const res = await fetch(``, {
        method: 'PATCH',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedUser)
    })

    const data = await res.json();
    console.log("After updating: ", data);

    // todo: revalidate cache

    return data;
}

export const deleteUser = async(userId) =>{
    'use server'
    
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    console.log('deleted user:', data)
    // todo: revalidate cache
    if(data.deletedCount > 0){
        revalidatePath('/users');
    }

    return data;
}