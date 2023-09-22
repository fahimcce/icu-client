import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBlood = () => {
    const donar = useLoaderData()
    const navigator = useNavigate()


    const UpdateDonar = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const group = form.group.value;
        const photo = form.photo.value;
        const Updatedonar = { name, contact, group, photo }

        fetch(`http://localhost:5000/update/blood/${donar._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatedonar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success Fully',
                        text: 'Medicine Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                    navigator('/allBlood')
                }
            })
    }


    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add Blood Donar</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={UpdateDonar}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donar Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={donar.name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blood group</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="group" defaultValue={donar.group} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="contact" defaultValue={donar.contact} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={donar.photo} className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Update Donar" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlood;