import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navs = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const isAdmin = user && user.email === 'admin@admin.com';


    return (
        <div className="navbar bg-gray-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/allicu'>
                                Icu
                            </Link>
                        </li>
                        <li>
                            <Link to='/doctors'>
                                Doctors
                            </Link>
                        </li>
                        <li>
                            <Link to='/allmedicine'>
                                Medicine
                            </Link>
                        </li>
                        <li>
                            <Link to='/alllab'>
                                Diagnostic
                            </Link>
                        </li>
                        <li>
                            <Link to='/allBlood'>
                                Blood
                            </Link>
                        </li>
                        <li>
                            <Link to='/allAmbulance'>
                                Ambulance
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl">IcuBD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/allicu'>
                            Icu
                        </Link>
                    </li>
                    <li>
                        <Link to='/doctors'>
                            Doctors
                        </Link>
                    </li>
                    <li>
                        <Link to='/allmedicine'>
                            Medicine
                        </Link>
                    </li>
                    <li>
                        <Link to='/alllab'>
                            Diagnostic
                        </Link>
                    </li>
                    <li>
                        <Link to='/allBlood'>
                            Blood
                        </Link>
                    </li>
                    <li>
                        <Link to='/allAmbulance'>
                            Ambulance
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <p className="text-lg mr-4">{user.displayName}</p>
                        {isAdmin && (
                            <Link to='/secret'>
                                <button className="btn">Control Panel</button>
                            </Link>
                        )}
                        <button onClick={handleLogOut} className="btn">Logout</button>
                    </>
                ) : (
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navs;