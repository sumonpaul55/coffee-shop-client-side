import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-2 bg-blue-200'>
            <div className="container mx-auto">
                <div className='flex justify-between'>
                    <div>
                        <h1 className="text-xl">Logo</h1>
                    </div>
                    <div className='flex gap-10'>
                        <NavLink className="text-red-900 font-semibold" to="/">Home</NavLink>
                        <NavLink className="text-red-900 font-semibold" to="addcoffee">Add Coffee</NavLink>
                        <NavLink className="text-red-900 font-semibold" to="/signin">Sign In</NavLink>
                        <NavLink className="text-red-900 font-semibold" to="/signup">Sign Up</NavLink>
                        <NavLink className="text-red-900 font-semibold" to="/users">Users</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;