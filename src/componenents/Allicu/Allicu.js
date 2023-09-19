import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Navs from '../Home/Navs/Navs';


const Allicu = () => {
    const allicu = useLoaderData()
    return (
        <div>
            <Navs></Navs>
            <div>
                {
                    allicu.map(icu => <div key={icu._id}>
                        <div className="collapse collapse-arrow bg-base-200 mt-4">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title  font-medium flex">
                                <h1 className='text-xl'>{icu.name}</h1>
                                <h1 className='ml-16'>Available Seats : 23</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Price : {icu.price} per day ."Based on patient situation"</p>
                                <p>{icu.details}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Allicu;