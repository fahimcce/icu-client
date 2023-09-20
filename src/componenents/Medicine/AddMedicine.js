import React from 'react';

const AddMedicine = () => {
    const handleAdd = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;

        const medicine = { name, price }
        console.log(medicine)
        fetch('https://icubd-server.vercel.app/medicine', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(medicine)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Medicine added SuccessFully')
                    form.reset();
                }
            })
    }



    return (
        <div>
            <div className='mb-4'>
                <h3 className='text-2xl py-1 mb-2 mt-14 text-white font-semibold bg-amber-700 w-1/2 mx-auto'><p className='text-center'>Add New Medicine</p></h3>
                <hr />

                <div className='w-3/4 mx-auto'>
                    <form onSubmit={handleAdd}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Medicine Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter Medicine Name" className="input input-bordered w-full" />
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
                        <input className="btn btn-ghost mt-4 bg-amber-700 w-full text-white" type="submit" value="ADD NEW MEDICINE" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMedicine;