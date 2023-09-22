import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import SearchBlood from './SearchBlood';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AllBlood = () => {
    const donars = useLoaderData();
    const [ndonars, setDonars] = useState(donars);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const isAdmin = user && user.email === 'admin@admin.com';

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

    const deleteDonor = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/donar/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Donor deleted.',
                                'success'
                            )
                            const remaining = ndonars.filter(donor => donor._id !== _id);
                            setDonars(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-yellow-900'><i className="fas fa-hand-point-right mx-2"></i>Find Your Donar</h1><hr />
            <SearchBlood handleSearch={handleSearch} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mb-4'>
                {isLoading ? (
                    <span className="absolute inset-0 flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </span>
                ) : noDataFound ? (
                    <p className="text-red-500 text-center">No data found.</p>
                ) : (
                    ndonars.map((donar) => (
                        <div key={donar.id} className="card w-56 bg-base-100 shadow-xl mx-auto">
                            <figure>
                                <img className=' w-56' src={donar.photo} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-center">Name: <span className='font-semibold'>{donar.name}</span></h2>
                                <h2 className="text-center">Group: <span className='font-bold'>{donar.group}</span></h2>
                                <h2 className="text-center">Contact: <span className='font-semibold'>{donar.contact}</span></h2>
                                {
                                    isAdmin && (<div className='flex justify-center'>
                                        <div >
                                            <Link className='mx-2' to={`/update/blood/${donar._id}`}>
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                        </div>
                                        <div>
                                            <button onClick={() => deleteDonor(donar._id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllBlood;
