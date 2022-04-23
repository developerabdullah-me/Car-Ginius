import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDettail = () => {
    const {serviceId}=useParams()
    const [service,setService]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setService(data))
    },[])
  
    return (
        <div>
            <h1>welcome{service.name}</h1>
            <Link to='/checkOut'>
                <button className='btn btn-primary'>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDettail;