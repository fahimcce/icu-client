import React, { useState } from 'react';
import { Link, useLoaderData, } from 'react-router-dom';
import Navs from '../Home/Navs/Navs';


const Allicu = () => {
    const allicu = useLoaderData()
    const [hospitals, setHospitals] = useState(allicu);

    const deleteIcu = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/icu/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('SuccessFully Deleted')
                    const remaining = hospitals.filter(hospital => hospital._id !== _id);
                    setHospitals(remaining)
                }
            })
    }
    return (
        <div>
            <Navs></Navs>
            <div>
                {
                    hospitals.map(icu => <div key={icu._id}>
                        <div className="collapse collapse-arrow bg-base-200 mt-4">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title  font-medium flex justify-between  border border-2 ">
                                <h1 className='text-xl'>{icu.name}</h1>
                                <h1 >Available Seats : {icu.seat}</h1>
                                <h1 >Updates : {icu.date}</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Price : {icu.price} per day ."Based on patient situation"</p>
                                <p>{icu.details}</p>
                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                    <div>
                                        <Link className=' mx-2 ' to='/'>
                                            <button className=" btn btn-neutral text-right">Update</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button onClick={() => deleteIcu(icu._id)} className=" btn btn-neutral text-right">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Allicu;