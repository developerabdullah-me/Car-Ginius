import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name,img,description,price,_id}=props.service;
    const naviGate =useNavigate()
    const handelUsParams=_id=>{
      naviGate(`/service/${_id}`)
    }
    return (
        <div className='service-Content p-5'>
           
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p>{description}</p>
            <button onClick={() =>handelUsParams (_id)} className='btn btn-primary '>{name}</button>
        </div>
    );
};

export default Service;