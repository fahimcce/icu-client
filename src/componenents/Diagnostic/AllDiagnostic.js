import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SearchBar from '../Allicu/SearchBar';

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
        console.log('Please delete', _id)
        fetch(`https://icubd-server.vercel.app/lab/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Success')
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-semibold text-green-600'>Lab Test Prices</h1><hr />
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
                                                    <button onClick={() => handleDelete(lab._id)} className='bg-white p-1 mx-1'>X</button>

                                                    <Link>
                                                        <button className='bg-white p-1'>Update</button>
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
        </div>
    );
};

export default AllDiagnostic;