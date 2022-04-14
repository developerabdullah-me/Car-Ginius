import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,img,description,price,id}=props.service;
    const naviGate =useNavigate()
    const handelUsParams=id=>{
naviGate(`/service/${id}`)
    }
    return (
        <div className='service-Content p-5'>
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p>{description}</p>
            <button onClick={() =>handelUsParams (id)} className='btn btn-primary '>{name}</button>
        </div>
    );
};

export default Service;