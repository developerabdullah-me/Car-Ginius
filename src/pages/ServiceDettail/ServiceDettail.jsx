import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useDetails from '../Hooks/UseDetails';

const ServiceDettail = () => {
    const {serviceId}=useParams()
    const [service,setService]=useDetails(serviceId)
    
  
    return (
        <div>
            <h1>welcome{service.name}</h1>
            <Link to={`/checkOut/${serviceId}`}>
                <button className='btn btn-primary'>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDettail;