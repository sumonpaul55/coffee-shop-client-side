import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
        const coffee = { name, quantity, supplier, taste, category, detail, photo }
        // send data to the server
        fetch("https://coffee-shop-server-sigma.vercel.app/coffee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        "Coffee added Successfully"
                    )
                }
            })
        // form.reset();
    }
    return (
        <div className='container mx-auto mt-20'>
            <h1 className="text-4xl mb-5">Add New Coffee</h1>
            <form className='flex justify-center flex-col items-center gap-5 max-w-[800px] mx-auto py-10 px-5 bg-gray-300' onSubmit={handleSubmit}>
                <div className='flex gap-5 w-full'>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Coffee Name</label>
                        <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Quentity</label>
                        <input type="text" name='quantity' placeholder="Quentity" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='w-full flex gap-5'>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Supplier</label>
                        <input type="text" name='supplier' placeholder="Coffee Supplier" className="input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Taste</label>
                        <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='w-full flex gap-5'>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Category</label>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className='flex flex-col font-semibold w-full'>
                        <label htmlFor="">Details</label>
                        <input type="text" name='detail' placeholder="Details" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex flex-col font-semibold w-full'>
                    <label htmlFor="">Photo</label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full" />
                </div>
                <input type="submit" value="ADD COFFEE" className='input bg-slate-600 w-full text-white hover:bg-slate-200 hover:text-black cursor-pointer duration-200' />

            </form>
        </div>
    );
};

export default AddCoffee;