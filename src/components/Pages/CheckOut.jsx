import React from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Email Not Found!';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-module-66.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order Placed!')
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='checkOut-bgImg flex flex-col justify-center items-center'>
                <div className=''>
                    <h2 className=' text-4xl font-bold text-white'>{title}</h2>
                </div>
                <Link to='/' type='button' className='my-3 px-5 p-3 bg-red-600 text-white rounded-t-xl font-semibold'>Home/Checkout</Link>
            </div>
            <div className="lg:w-6/12 mx-auto my-10">
                <form onSubmit={handlePlaceOrder} className="w-full p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='firstName' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" required />
                        <input name='lastName' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" required />

                        <input name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" defaultValue={user?.email} placeholder="Email*" readOnly />

                        <input name='phone' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Phone*" required />
                    </div>
                    <div className="my-4">
                        <textarea name='message' placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                    </div>
                    <div className="my-2 lg:grid md:grid grid-cols-2 gap-3">
                        <button type='submit' className="uppercase text-center text-sm font-bold tracking-wide bg-red-600 hover:bg-red-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Order Confirm
                        </button>
                        <Link to='/orders' type='submit' className="uppercase text-center text-sm font-bold tracking-wide hover:bg-red-600 bg-red-400 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            View Cart
                        </Link>
                    </div>
                </form>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false}></Toaster>
        </div>
    );
};

export default CheckOut;