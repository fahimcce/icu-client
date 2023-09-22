import React from 'react';
import Swal from 'sweetalert2';


const AddDoctors = () => {
    const addDoctors = event => {
        event.preventDefault()
        const form = event.target;
        const doctorName = form.doctorname.value;
        const designation = form.designation.value;
        const fees = form.fees.value;
        const categories = form.categories.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const doctor = { doctorName, categories, designation, fees, photo, details }

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success Fully',
                        text: 'New Doctor added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div>

            <div>
                <div className='mb-4'>
                    <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add New Doctor</p></h3>
                    <hr />
                    <div className='w-3/4 mx-auto'>
                        <form onSubmit={addDoctors}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Doctor Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="doctorname" placeholder="Enter Doctor Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Categories</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="categories" placeholder="Enter categories" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="designation" placeholder="Enter Designation" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fees</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="fees" placeholder="Enter fees" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" placeholder="Enter details" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" placeholder="paste photo url" className="input input-bordered w-full" />
                                </label>
                            </div>


                            {/* Submit Button */}
                            <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="ADD" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;