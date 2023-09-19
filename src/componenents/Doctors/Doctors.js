import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import SearchBar from '../Allicu/SearchBar';

const Doctors = () => {
    const doctors = useLoaderData();
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [noDataFound, setNoDataFound] = useState(false);


    const handleSearch = (searchText) => {
        const filteredDoctors = doctors.filter((doctor) =>
            doctor.doctorName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredDoctors(filteredDoctors);

        if (filteredDoctors.length === 0) {
            setNoDataFound(true);
        } else {
            setNoDataFound(false);
        }
    };
    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>

                {noDataFound ?
                    <p className="text-red-500 text-center">No data found.</p>
                    :
                    filteredDoctors.map(doctor => <div key={doctor._id} className="card w-72 bg-base-100 shadow-xl mx-auto mt-2">
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