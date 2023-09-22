import React from 'react';
import { Link } from 'react-router-dom';


const Services = () => {

    return (
        <div className='mt-4'>
            <div>
                <h1 className='text-left text-xl font-bold'>Our Services</h1>
                <hr />
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto'>
                    {/* Card 01 */}
                    <div className="card w-72 bg-base-100 shadow-xl  mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/6Yt0GmQ/modern-healthcare-equipment-illuminates-empty-hospital-ward-generated-by-ai.jpg" alt="Shoes" className="rounded-xl h-36 w-64" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">ICU</h2>
                            <p>Total available ICU : <p className='text-xl font-bold text-green-500'>50+</p></p>
                            <div className="card-actions">

                                <Link to='allicu'>
                                    <button className="btn btn-primary text-white">Show more..</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* card 02 */}
                    <div className="card w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/LRFGN0F/doctors.jpg" alt="Shoes" className="rounded-xl h-36 w-64" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Doctors</h2>
                            <p>Total listed Doctors : <p className='text-xl font-bold text-green-500'>500+</p></p>
                            <div className="card-actions">
                                <Link to='/doctors'>
                                    <button className="btn btn-primary text-white">Show doctors..</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* card 03 */}
                    <div className="card w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/jf2s7YC/drugs.jpg h-36 w-64" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Medicine Price</h2>
                            <p>Total listed Medicine : <p className='text-xl font-bold text-green-500'>2000+</p></p>
                            <div className="card-actions">
                                <Link to='/allmedicine'>
                                    <button className="btn btn-primary text-white">Medicine Prices..</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* card 04 */}
                    <div className="card w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/r5jQd2Y/lab.jpg" alt="Shoes" className="rounded-xl h-36 w-64" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Lab Test Prices</h2>
                            <p>Total types lab test : <p className='text-xl font-bold text-green-500'>350+</p></p>
                            <div className="card-actions">
                                <Link to='/alllab'>
                                    <button className="btn btn-primary text-white">lab test..</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* card 05 */}
                    <div className="card w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/ZgR93zc/blood.jpg" alt="Shoes" className="rounded-xl h-36 w-64" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Blood</h2>
                            <p>Total listed Blood Donor : <p className='text-xl font-bold text-green-500'>700+</p></p>
                            <Link to='/allBlood'>
                                <button className="btn btn-primary text-white">Show Donars..</button>
                            </Link>
                        </div>
                    </div>
                    {/* card 06 */}
                    <div className="card w-72 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/82TTBx4/ambo.jpg" alt="Shoes" className="rounded-xl h-36 w-54" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">Ambulance</h2>
                            <p>Total listed Ambulance : <p className='text-xl font-bold text-green-500 '>100+</p></p>
                            <Link to='/allambulance'>
                                <button className="btn btn-primary text-white">Show Donars..</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
