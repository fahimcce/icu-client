import React from 'react';
import { Link } from 'react-router-dom';

const Secret = () => {
    return (
        <div className='w-full mx-auto lg:w-2/3 md:w-2/3'>
            <div className='text-4xl text-center font-bold'>
                <h1>Control Panel</h1>
                <hr />
            </div>
            <div className='m-20 grid grid-cols-1 lg:grid-cols-2 '>
                <Link to='/icuadd'>
                    <button className="btn btn-success m-2 text-white">+ Add ICU</button>
                </Link>
                <Link to='/doctoradd'>
                    <button className="btn btn-success m-2 text-white">+ Add Doctor</button>
                </Link>
                <Link to='/addBlood'>
                    <button className="btn btn-success m-2 text-white">+ Blood Donor</button>
                </Link>
                <Link to='/addAmbulance'>
                    <button className="btn btn-success m-2 text-white">+ Add Ambulance</button>
                </Link>
                <Link to='/medicine'>
                    <button className="btn btn-success m-2 text-white">+ Add Medicine</button>
                </Link>
                <Link to='/lab'>
                    <button className="btn btn-success m-2 text-white">+ Lab Test</button>
                </Link>

            </div>
        </div>
    );
};

export default Secret;