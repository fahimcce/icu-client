import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import SearchBlood from './SearchBlood';

const AllBlood = () => {
    const donars = useLoaderData();
    const [ndonars, setDonars] = useState(donars);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleSearch = (searchText) => {
        if (!donars || donars.length === 0) {
            // Don't attempt to filter if donars is undefined or empty
            return;
        }

        const normalizedSearchText = (searchText || '').toLowerCase();

        const filteredDonars = donars.filter((donar) =>
            donar.group && donar.group.toLowerCase().includes(normalizedSearchText)
        );
        setDonars(filteredDonars);

        // Check if no data is found
        if (filteredDonars.length === 0) {
            setNoDataFound(true);
        } else {
            setNoDataFound(false);
        }
    };




    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-yellow-900'><i className="fas fa-hand-point-right mx-2"></i>Find Your Donar</h1><hr />
            <SearchBlood handleSearch={handleSearch} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-4'>
                {isLoading ? (
                    <span className="absolute inset-0 flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </span>
                ) : noDataFound ? (
                    <p className="text-red-500 text-center">No data found.</p>
                ) : (
                    ndonars.map((donar) => (
                        <div key={donar.id} className="card w-44 bg-base-100 shadow-xl mx-auto">
                            <figure>
                                <img className='h-52 w-44' src={donar.photo} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-center">{donar.name}</h2>
                                <h2 className="text-center">{donar.group}</h2>
                                <h2 className="text-center">{donar.contact}</h2>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllBlood;