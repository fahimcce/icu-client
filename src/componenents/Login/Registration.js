import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await createUser(email, password);
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Account Created Successfully',
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
            // Reset the error state to null when successful
            setError(null);
        } catch (error) {
            // Handle the error and display it in the UI
            setError("Already register!!Please Login"); // Assuming the error message contains relevant information
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
                            {/* form */}
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" required name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            {error && (
                                <div className="text-red-500 text-center mt-4">
                                    {error}
                                </div>
                            )}
                            <p className='text-center'>already have an account <Link className='text-red-500' to='/login'>login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
