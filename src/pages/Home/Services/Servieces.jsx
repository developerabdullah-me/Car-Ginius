import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servieces.css'

const Servieces = () => {
  const [services,setServices]=useState([])
  useEffect( ()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data));
}, [])
    return (
        <div>
            <h1>Our Service</h1>
       <div className="serviceContainer">
       {
            services.map(service => <Service service={service}></Service>)
        }
       </div>
        </div>
    );
};

export default Servieces;