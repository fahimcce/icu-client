import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, } from 'react-router-dom';
import SearchBar from './SearchBar';
import { AuthContext } from '../../Providers/AuthProvider';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { calculateTotalAvailableSeats } from './IcuSeat';
import Swal from 'sweetalert2';


const Allicu = () => {
    const allicu = useLoaderData()
    const { user } = useContext(AuthContext);
    const [hospitals, setHospitals] = useState(allicu);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const totalAvailableSeats = calculateTotalAvailableSeats(allicu);

    const isAdmin = user && user.email === 'admin@admin.com';

    useEffect(() => {
        // Simulate loading data delay for demonstration purposes
        setTimeout(() => {
            setIsLoading(false); // Mark loading as complete
        }, 2000); // Adjust the delay time as needed

        // You can replace the setTimeout with your actual data fetching logic
    }, []);

    const deleteIcu = _id => {
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
                console.log('delete', _id);
                fetch(`http://localhost:5000/icu/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'ICU deleted.',
                                'success'
                            )
                            const remaining = hospitals.filter(hospital => hospital._id !== _id);
                            setHospitals(remaining)
                        }
                    })
            }
        })
    }

    const handleSearch = (searchText) => {
        const filteredHospitals = allicu.filter((icu) =>
            icu.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setHospitals(filteredHospitals);

        // Check if no data is found
        if (filteredHospitals.length === 0) {
            setNoDataFound(true);
        } else {
            setNoDataFound(false);
        }
    };

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-yellow-900'>Total Available ICU : {totalAvailableSeats}+</h1><hr />
            <SearchBar handleSearch={handleSearch} />
            <div>
                {isLoading ? ( // Check loading state
                    // Display loading bar while loading
                    <span className="absolute inset-0 flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </span>
                ) :
                    noDataFound ? (
                        <p className="text-red-500 text-center">No data found.</p>
                    ) :
                        hospitals.map(icu => <div key={icu._id}>
                            <div className="collapse collapse-arrow bg-base-200 mt-4">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title  font-medium flex justify-between  border border-2 ">
                                    <h1 className='text-xl'>{icu.name}</h1>
                                    <h1 >Available Seats : {icu.seat}</h1>
                                    <h1 >Updates : {icu.date}</h1>
                                </div>
                                <div className="collapse-content">
                                    <p>Price : {icu.price} per day ."Based on patient situation"</p>
                                    <p>{icu.details}</p>
                                    {
                                        isAdmin && (<div className='flex'>
                                            <div >
                                                <Link className='mx-2' to='/'>
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                            </div>
                                            <div>
                                                <button onClick={() => deleteIcu(icu._id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Allicu;