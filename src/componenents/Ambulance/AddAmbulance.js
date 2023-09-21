import React from 'react';
import Swal from 'sweetalert2';

const AddAmbulance = () => {
    const AddAmbulance = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const ambulance = { photo, category, name, contact }
        console.log(ambulance)
        fetch('http://localhost:5000/ambulance', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ambulance)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success Fully',
                        text: 'New Medicine added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add New Ambulance</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={AddAmbulance}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="paste photo url" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Normal or Freezer" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Driver Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter Driver Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="contact" placeholder="Enter contact" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddAmbulance;