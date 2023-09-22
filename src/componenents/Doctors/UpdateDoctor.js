import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateDoctor = () => {
    const doctors = useLoaderData();
    const navigate = useNavigate()


    const UpdateDoctor = event => {
        event.preventDefault()
        const form = event.target;
        const doctorName = form.doctorname.value;
        const designation = form.designation.value;
        const fees = form.fees.value;
        const categories = form.categories.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const Updatedoctor = { doctorName, categories, designation, fees, photo, details }
        fetch(`http://localhost:5000/update/doctor/${doctors._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatedoctor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success Fully',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                    navigate('/doctors')
                }
            })
    }

    return (
        <div>
            <div>
                <div className='mb-4'>
                    <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Update {doctors.doctorName}</p></h3>
                    <hr />
                    <div className='w-3/4 mx-auto'>
                        <form onSubmit={UpdateDoctor}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Doctor Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="doctorname" defaultValue={doctors?.doctorName} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Categories</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="categories" defaultValue={doctors?.categories} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="designation" defaultValue={doctors?.designation} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fees</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="fees" defaultValue={doctors?.fees} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" defaultValue={doctors.details} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={doctors?.photo} className="input input-bordered w-full" />
                                </label>
                            </div>


                            {/* Submit Button */}
                            <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDoctor;