import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div>
            <div className='w-6/12 mx-auto text-center text-gray-700'>
                <h6 className='text-xl font-bold text-red-600'>Service</h6>
                <h2 className='text-5xl font-bold my-3'>Our Service Area</h2>
                <p className='mb-16'>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;