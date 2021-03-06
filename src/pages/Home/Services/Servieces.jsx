import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servieces.css'

const Servieces = () => {
  const [services,setServices]=useState([])
  useEffect( ()=>{
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setServices(data));
}, [])
    return (
        <div id="services" className=" container">
        <div className="row">
        <h1 className="mt-5 text-center text-primary">Our Service</h1>
       <div className="serviceContainer ">
       {
            services.map(service => <Service service={service} key={service._id}></Service>)
        }
       </div>
        </div>
        </div>
    );
};

export default Servieces;