import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SearchBar from '../Allicu/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthContext } from '../../Providers/AuthProvider';

const Doctors = () => {
    const doctors = useLoaderData();
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [noDataFound, setNoDataFound] = useState(false);
    const modalRef = useRef(null);
    const { user } = useContext(AuthContext);

    const isAdmin = user && user.email === 'admin@admin.com';

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

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>
                {noDataFound ? (
                    <p className="text-red-500 text-center">No data found.</p>
                ) : (
                    filteredDoctors.map((doctor) => (
                        <div key={doctor._id} className="card w-72 bg-base-100 shadow-xl mx-auto mt-2">
                            <figure><img src={doctor.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-center font-bold text-1xl">{doctor.doctorName}</h2>
                                <h1 className='font-semibold'>Dept.: {doctor.categories}</h1>
                                <p>{doctor.designation}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-white" onClick={() => openModal(doctor)}>
                                        Appointment
                                    </button>
                                    {
                                        isAdmin && <>
                                            <Link>
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                            <button>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>

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
