import React from 'react';
import { Link } from 'react-router-dom';
import Navs from '../Home/Navs/Navs';

const AddICU = () => {

    const handleAdd = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const seat = form.number.value;
        const price = form.price.value;
        const details = form.details.value;
        const date = form.dateTime.value;
        const icu = { name, seat, price, details, date }
        console.log(icu)
        fetch('http://localhost:5000/icu', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(icu)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('ICU added SuccessFully')
                    form.reset();
                }
            })
    }



    return (
        <div>
            <div>
                <Navs></Navs>
            </div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add New ICU</p></h3>
                <hr />
                <div className=' ml-72'>
                    <Link to='/addicu'>
                        <button className="btn btn-success">All Chocolates</button>
                    </Link>
                </div>
                <div className='w-3/4 mx-auto'>
                    <form onSubmit={handleAdd}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hospital Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter Hospital Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available ICU Number</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="number" placeholder="Enter number of seats available" className="input input-bordered w-full" />
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
                                <span className="label-text">Updated Date & time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="dateTime" placeholder="follow this pattern : 12 september ,2023 / 3:30pm" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="ADD" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddICU;