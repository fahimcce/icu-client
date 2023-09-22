import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SearchBar from '../Allicu/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';

const AllDiagnostic = () => {
    const labs = useLoaderData();
    const [alllabs, setlabs] = useState(labs);
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
        const filteredlabs = alllabs.filter((lab) =>
            lab.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setlabs(filteredlabs);

        if (filteredlabs.length === 0) {
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

                console.log('Please delete', _id)
                fetch(`http://localhost:5000/lab/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = alllabs.filter(lab => lab._id !== _id);
                            setlabs(remaining)

                        }
                    })

            }
        })
    }

    return (
        <div className='mb-4'>
            <h1 className='text-3xl text-center font-semibold text-green-600'><i className="fas fa-hand-point-right mx-2"></i>Lab Test Prices</h1><hr />
            <div>
                <SearchBar handleSearch={handleSearch} />
                <h1 className='text-red-600 font-bold mb-1'>"Prices may vary depending on the Hospitals"</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th className='text-center'>Price(TAKA)</th>
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
                                    <p className="text-red-500 text-center">No data found.</p>
                                ) :
                                    alllabs.map((lab, index) => (
                                        <tr className={index % 2 === 0 ? "bg-base-200" : "bg-base-100"} key={index + 1}>
                                            <td style={{ marginBottom: '1rem' }}>{index + 1}</td>
                                            <td style={{ marginBottom: '1rem' }}>{lab.name}</td>
                                            <td className='text-center' style={{ marginBottom: '1rem' }}>{lab.price}</td>
                                            {
                                                isAdmin && <td>
                                                    <Link className='mx-2' to='/'>
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button onClick={() => handleDelete(lab._id)} >
                                                        <i className="fas fa-trash-alt"></i>
                                                    </button>

                                                </td>
                                            }
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllDiagnostic;