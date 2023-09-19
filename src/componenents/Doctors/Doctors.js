import React from 'react';
import Navs from '../Home/Navs/Navs';
import { useLoaderData } from 'react-router-dom';

const Doctors = () => {
    const doctors = useLoaderData();
    return (
        <div>
            <div>
                <Navs></Navs>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>

                {
                    doctors.map(doctor => <div key={doctor._id} className="card w-72 bg-base-100 shadow-xl mx-auto mt-2">
                        <figure><img src={doctor.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{doctor.doctorName}</h2>
                            <p>{doctor.designation}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white">Appointment</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Doctors;