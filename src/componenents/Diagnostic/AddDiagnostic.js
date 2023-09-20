import React from 'react';
import Swal from 'sweetalert2';

const AddDiagnostic = () => {
    const handlelabTest = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;

        const lab = { name, price }
        console.log(lab)
        fetch('http://localhost:5000/lab', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lab)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'successFully',
                        text: 'New lab test added',
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
                    <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add New Lab Test</p></h3>
                    <hr />

                    <div className='w-3/4 mx-auto'>
                        <form onSubmit={handlelabTest}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Lab Test Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Enter test Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Enter Price" className="input input-bordered w-full" />
                                </label>
                            </div>


                            {/* Submit Button */}
                            <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="Lab test add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDiagnostic;