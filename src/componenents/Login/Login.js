import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../src/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
            form.reset();
        } catch (error) {
            // Handle the error and set the error message
            setErrorMessage("User Not Found. Please Sign Up");
        }
    };

    return (
        <div>
            <div className='mt-4'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="mr-12 w-1/2">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-2xl text-center font-bold">Login</h1>
                                {errorMessage && (
                                    <div className="text-red-500 text-center mt-4">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={handleLogin}>
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
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </form>
                                <p className='text-center'>New to ICUBD ? <Link className='text-red-500' to='/register'>Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
