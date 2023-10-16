import React from 'react';
import PropTypes from "prop-types";
import { AiFillEye, AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { name, quantity, supplier, taste, category, photo, _id } = coffee;


    // console.log(coffee)

    const handleDelete = (_id) => {
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
                // delete method here........
                console.log(_id)
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remainingCoffee = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remainingCoffee)

                    })
            }
        })
    }

    return (
        <div className='bg-gray-300 p-5 rounded-lg flex justify-between'>
            <div><img src={photo} alt="" width="100" /></div>
            <div>
                <h2 className="text-2xl">Name: <b>{name}</b></h2>
                <h2 className="text-xl">Quantity: <b>{quantity}</b></h2>
                <h2 className="text-xl">Supplier: <b>{supplier}</b></h2>
                <h2 className="text-xl">Taste: <b>{taste}</b></h2>
                <h2 className="text-xl">Category: <b>{category}</b></h2>
            </div>
            <div className='flex flex-col gap-1'>
                <span className='p-2 bg-gray-100 cursor-pointer'><AiFillEye /></span>
                <Link to={`/updateCoffee/${_id}`}><button className='p-2 bg-gray-100 cursor-pointer'><AiFillEdit /></button></Link>
                <button className='p-2 bg-gray-100 cursor-pointer' onClick={() => handleDelete(coffee._id)}><AiOutlineDelete /></button>
            </div>
        </div>
    );
};
Coffee.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}
export default Coffee;