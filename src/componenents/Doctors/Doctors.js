import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SearchBar from '../Allicu/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Doctors = () => {
    const doctors = useLoaderData();
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const modalRef = useRef(null);
    const { user } = useContext(AuthContext);

    const isAdmin = user && user.email === 'admin@admin.com';

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

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

    const openModal = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const closeModal = () => {
        setSelectedDoctor(null);
    };

    useEffect(() => {
        const modal = modalRef.current;

        if (modal) {
            if (selectedDoctor) {
                modal.showModal();
            } else {
                modal.close();
            }
        }
    }, [selectedDoctor]);

    // delete Doctor
    const deleteDoctor = _id => {
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
                fetch(`http://localhost:5000/doctors/${_id}`, {
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
                            const remaining = filteredDoctors.filter(doctor => doctor._id !== _id);
                            setFilteredDoctors(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='mb-4'>
            <h1 className='text-3xl text-center font-semibold text-sky-600'><i className="fas fa-hand-point-right mx-2"></i>Find your Doctor..</h1><hr />
            <SearchBar handleSearch={handleSearch} />
            <div className='grid grid-cols-1 lg:grid-cols-4 mt-4'>
                {
                    isLoading ? ( // Check loading state
                        // Display loading bar while loading
                        <span className="absolute inset-0 flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </span>
                    ) :
                        noDataFound ? (
                            <p className="text-red-500 text-center">No data found.</p>
                        ) : (
                            filteredDoctors.map((doctor) => (
                                <div key={doctor._id} className="card w-56 bg-base-100 shadow-xl mx-auto mt-2">
                                    <figure><img src={doctor.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-center font-bold text-1xl">Dr {doctor.doctorName}</h2>
                                        <h1 className='font-semibold'>Dept.: {doctor.categories}</h1>
                                        <p>{doctor.designation}</p>
                                        <p>Fees : <span className='font-bold'>{doctor.fees}</span></p>
                                        <div className="card-actions grid grid-cols-1">
                                            <button className="btn btn-primary text-white" onClick={() => openModal(doctor)}>
                                                Appointment
                                            </button>
                                            {
                                                isAdmin && <>
                                                    <div className='flex justify-center'>
                                                        <Link to={`/update/doctor/${doctor._id}`}>
                                                            <i className="fas fa-edit mx-2"></i>
                                                        </Link>
                                                        <button onClick={() => deleteDoctor(doctor._id)}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>

                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
            </div>

            <dialog id="my_modal_2" className="modal" ref={modalRef}>
                <div className="modal-box">
                    {selectedDoctor && (
                        <>
                            <h3 className="font-bold text-lg">{selectedDoctor.doctorName}</h3>
                            <p className="py-4">{selectedDoctor.details}</p>
                        </>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>Close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Doctors;
