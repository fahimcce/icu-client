import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateAmbulance = () => {
    const ambulance = useLoaderData()
    const navigator = useNavigate()

    const UpdateAmbulance = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const UpdateAmbulance = { photo, category, name, contact }
        fetch(`http://localhost:5000/update/ambulance/${ambulance._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateAmbulance)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success Fully',
                        text: 'Ambulance Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                    navigator('/allAmbulance')
                }
            })
    }

    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Update Ambulane</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={UpdateAmbulance}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={ambulance.photo} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={ambulance.category} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Driver Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={ambulance.name} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="contact" defaultValue={ambulance.contact} className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Update Ambulance" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAmbulance;