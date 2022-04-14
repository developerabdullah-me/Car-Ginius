import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDettail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h1>welcome{serviceId}</h1>
            <Link to='/checkOut'>
                <button className='btn btn-primary'>check out</button>
            </Link>
        </div>
    );
};

export default ServiceDettail;