import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedusers = useLoaderData();
    const [users, setUsers] = useState(loadedusers)

    // console.log(users)
    const handleDelete = (_id) => {
        // console.log(e)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteUser/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0)
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                    })

            }
        })



    }
    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl">Users</h2>
            <div>
                <div className="overflow-x-auto max-w-[600px] mx-auto mt-20">
                    <table className="table border p-5">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Account Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, idx) => (
                                    <tr key={idx} className='bg-base-200'>
                                        <td className='font-medium'>{idx + 1}</td>
                                        <td className='font-medium'>{user.email}</td>
                                        <td className='font-medium'>{user.createdTime}</td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className='bg-gray-300 font-semibold hover:bg-gray-500 duration-300 hover:text-white p-1'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;