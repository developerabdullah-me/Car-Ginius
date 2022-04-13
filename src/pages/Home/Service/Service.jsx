import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name,img,description,price}=props.service;
    return (
        <div className='service-Content'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
        </div>
    );
};

export default Service;