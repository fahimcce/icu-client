import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ShowAmbulance = () => {
    const allAmbulance = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('None');
    const [ambulances, setAmbulances] = useState(allAmbulance);
    const [filteredAmbulances, setFilteredAmbulances] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const isAdmin = user && user.email === 'admin@admin.com';

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'None') {
            setFilteredAmbulances(ambulances); // Show all ambulances when None is selected
        } else {
            const filtered = ambulances.filter(ambulance => ambulance.category === selectedCategory);
            setFilteredAmbulances(filtered);
        }
    }, [selectedCategory, ambulances]);

    // Delete Ambulance
    const deleteAmbulance = _id => {
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

                fetch(`http://localhost:5000/ambulance/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'ICU deleted.',
                                'success'
                            );
                            const remaining = ambulances.filter(ambulance => ambulance._id !== _id);
                            setAmbulances(remaining);
                            // Update filtered ambulances after deletion
                            const filteredRemaining = filteredAmbulances.filter(ambulance => ambulance._id !== _id);
                            setFilteredAmbulances(filteredRemaining);
                        }
                    });
            }
        });
    };

    // Add this function to handle category change
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    return (
        <div className='mt-4 mb-4'>
            <div className='mb-2'>
                <h1 className='text-3xl text-center font-semibold text-green-600 '><i className="fas fa-hand-point-right mx-2"></i>Hire an ambulance</h1>
                <hr />
            </div>

            <div className='mb-2'>
                <label htmlFor="categoryFilter" className="block text-lg font-semibold mb-1">Filter by Category:</label>
                <select
                    id="categoryFilter"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedCategory}
                    onChange={handleCategoryChange} // Add this line to handle category change
                >
                    <option value="None">None</option>
                    <option value="Normal">Normal</option>
                    <option value="Freezer">Freezer</option>
                </select>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1'>
                {isLoading ? ( // Check loading state
                    // Display loading bar while loading
                    <span className="absolute inset-0 flex justify-center items-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </span>
                ) :

                    filteredAmbulances.map(ambulance => (
                        <div key={ambulance._id} className="card card-compact w-60 mx-auto bg-base-100 shadow-xl">
                            <figure><img className='w-60 h-36' src={ambulance.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-green-500 font-semibold">{ambulance.category}</h2>
                                <h1>Driver name : <span className="text-lg font-semibold">{ambulance.name}</span></h1>
                                <h1>Contact : <span className="text-lg font-bold">{ambulance.contact}</span></h1>
                                {isAdmin && (
                                    <div className='flex justify-center'>
                                        <Link to={`/update/ambulance/${ambulance._id}`}>
                                            <i className="fas fa-edit mx-2"></i>
                                        </Link>
                                        <button onClick={() => deleteAmbulance(ambulance._id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ShowAmbulance;
