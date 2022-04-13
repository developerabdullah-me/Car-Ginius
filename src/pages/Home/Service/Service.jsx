import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name,img,description,price}=props.service;
    return (
        <div className='service-Content p-5'>
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p>{description}</p>
            <button className='btn btn-primary '>{name}</button>
        </div>
    );
};

export default Service;