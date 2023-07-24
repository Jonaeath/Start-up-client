import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ElectricCar = () => {

    const [services, setService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/newStartUp')
        .then(res =>res.json())
        .then(data =>setService(data))
    },[])

    return (
        <div>
            <div className='text-center mb-4'>
                <h1 className="text-5xl font-bold text-orange-600">Services</h1>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="text-xl font-bold text-orange-600 pb-5">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=><ServiceCard
                    key = {service._id}
                    service = {service}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default ElectricCar;