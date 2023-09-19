import React from 'react';
import { Link } from 'react-router-dom';

const Secret = () => {
    return (
        <div className='h-full w-full'>
            <div className='text-4xl text-center font-bold'>
                <h1>Control Panel</h1>
                <hr />
            </div>
            <div className='m-20  flex justify-center'>
                <Link to='/icuadd'>
                    <button className="btn btn-success mx-4">+ Add ICU</button>
                </Link>
                <Link to='/doctoradd'>
                    <button className="btn btn-success mx-4">+ Add ICU</button>
                </Link>
                <Link to='/doctoradd'>
                    <button className="btn btn-success mx-4">+ Blood Donor</button>
                </Link>
                <Link to='/doctoradd'>
                    <button className="btn btn-success mx-4">+ Add Ambulance</button>
                </Link>
                <Link to='/doctoradd'>
                    <button className="btn btn-success mx-4">+ Make Admin</button>
                </Link>

            </div>
        </div>
    );
};

export default Secret;