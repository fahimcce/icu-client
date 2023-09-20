import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SearchBar from '../Allicu/SearchBar';
import { AuthContext } from '../../Providers/AuthProvider';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';

const AllMedicine = () => {
    const medicines = useLoaderData();
    const [allMedicines, setMedicines] = useState(medicines);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const isAdmin = user && user.email === 'admin@admin.com';

    useEffect(() => {
        // Simulate loading data delay for demonstration purposes
        setTimeout(() => {
            setIsLoading(false); // Mark loading as complete
        }, 2000); // Adjust the delay time as needed

        // You can replace the setTimeout with your actual data fetching logic
    }, []);

    const handleSearch = (searchText) => {
        const filteredMedicines = medicines.filter((medicine) =>
            medicine.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setMedicines(filteredMedicines);

        if (filteredMedicines.length === 0) {
            setNoDataFound(true);
        } else {
            setNoDataFound(false);
        }
    };

    const handleDelete = _id => {
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
                fetch(`http://localhost:5000/medicine/${_id}`, {
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
                            const remaining = allMedicines.filter(medicine => medicine._id !== _id);
                            setMedicines(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-yellow-900'><i className="fas fa-hand-point-right mx-2"></i>Medicine Prices</h1><hr />
            <SearchBar handleSearch={handleSearch} />
            <h1 className='text-red-600 font-bold mb-1'>"Prices may vary depending on the pharmacy and company"</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-yellow-900 text-white'>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th className='text-center'>Price(TAKA- 10 teblets)</th>
                            {
                                isAdmin && <th>Actions</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? ( // Check loading state
                            // Display loading bar while loading
                            <span className="absolute inset-0 flex justify-center items-center">
                                <span className="loading loading-bars loading-lg"></span>
                            </span>
                        ) :
                            noDataFound ? (
                                <p className="text-red-500 text-center texl-3xl">No data found.</p>
                            ) :
                                allMedicines.map((medicine, index) => (
                                    <tr className={index % 2 === 0 ? "bg-base-200" : "bg-base-100"} key={index + 1}>
                                        <td style={{ marginBottom: '1rem' }}>{index + 1}</td>
                                        <td style={{ marginBottom: '1rem' }}>{medicine.name}</td>
                                        <td className='text-center' style={{ marginBottom: '1rem' }}>{medicine.price}</td>
                                        {
                                            isAdmin && <td>
                                                <button onClick={() => handleDelete(medicine._id)}> <i className="fas fa-trash-alt"></i></button>

                                                <Link className='mx-2' to='/'>
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                            </td>
                                        }
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMedicine;
