import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    console.log(service)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-56 object-cover p-3' src={img} alt="Shoes" /></figure>
                <div className="card-body pt-4">
                    <h2 className="card-title text-2xl font-bold mb-2">
                        {title}
                    </h2>
                    <div className="card-actions justify-between">
                        <p className="text-red-600 text-xl font-bold">Price: ${price}</p>
                        <Link to={`/checkOut/${_id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;