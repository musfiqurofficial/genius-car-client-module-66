import React, { useState } from 'react';
import { useEffect } from 'react';

const Order = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-server-module-66.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    return (
        <>
            <tr>
                <td className="border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-1/4 h-w-1/4">
                            <img className="w-full"
                                src={orderService?.img}
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">
                                {serviceName}
                            </p>
                            <p className="text-gray-900 whitespace-no-wrap text-sm">
                                {customer}
                            </p>
                            <p className="text-gray-900 whitespace-no-wrap text-sm">
                                ID: {orderService?.service_id}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white font-semibold text-lg ">
                    <p className="text-gray-900 whitespace-no-wrap">{price} Taka</p>
                </td>
                <td className="font-semibold text-lg  px-5 py-5 border-b border-gray-200 bg-white ">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {service.data}
                    </p>
                </td>
                <td className="py-10 px-2 border-b border-gray-200 bg-white grid lg:grid-cols-2 gap-3">
                    <button onClick={() => handleStatusUpdate(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">{status ? status : "Pending"}</button>
                    <button onClick={() => handleDelete(_id)} type="submit" className="w-full px-8 py-3 font-semibold text-lg rounded-md focus:bg-blue-50 active:bg-blue-100 hover:text-white text-black hover:bg-red-600 bg-red-200">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default Order;