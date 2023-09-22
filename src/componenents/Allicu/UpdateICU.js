import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateICU = () => {
    const updateICU = useLoaderData();
    let navigate = useNavigate()

    const currentDate = new Date();

    // Options for formatting date
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    // Options for formatting time
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true, // Set to true to use 12-hour format
    };

    const formattedDate = currentDate.toLocaleString('en-US', dateOptions);
    const formattedTime = currentDate.toLocaleString('en-US', timeOptions);
    const time = `Date: ${formattedDate} || Time: ${formattedTime}`;


    const handleUpdateICU = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const seat = form.number.value;
        const price = form.price.value;
        const details = form.details.value;
        const contact = form.contact.value;
        const icu = { name, seat, price, details, contact, time }
        fetch(`http://localhost:5000/update/icu/${updateICU._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(icu)
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
                    navigate('/allicu')
                }
            })
    }
    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Update for :{updateICU.name}</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={handleUpdateICU}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hospital Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={updateICU.name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available ICU Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="number" defaultValue={updateICU.seat} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={updateICU.price} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="contact" defaultValue={updateICU.contact} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={updateICU.details} className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Update ICU" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateICU;