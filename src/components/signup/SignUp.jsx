/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const createdTime = result.user?.metadata?.creationTime;
                const user = { email, createdTime }
                console.log(result.user)
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(`User Created Successfully`)
                    })

            })
            .catch(err => {
                Swal.fire(`${err}`)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>                      </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handelSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign up" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;