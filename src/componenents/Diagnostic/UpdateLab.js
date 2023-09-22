import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateLab = () => {
    const Oldlab = useLoaderData()
    const navigator = useNavigate()

    const handlelabTest = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const Updatelab = { name, price }

        fetch(`http://localhost:5000/update/lab/${Oldlab._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatelab)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'successFully',
                        text: 'lab test Updated',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                    navigator('/alllab')
                }
            })
    }
    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Update {Oldlab.name}</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={handlelabTest}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Lab Test Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={Oldlab.name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={Oldlab.price} className="input input-bordered w-full" />
                            </label>
                        </div>


                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateLab;