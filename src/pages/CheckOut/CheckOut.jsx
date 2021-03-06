import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../Hooks/UseDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const CheckOut = () => {
    const {serviceId}=useParams()
    const [service,setService]=useDetails(serviceId)
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            console.log(response);
            const {data} = response;
            if(data.insertedId){
               alert('Your order is booked!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div>
            <h1>Order Now:{service.name}</h1>

            <div className="">
            <form onSubmit={handlePlaceOrder}>
                <input className='mb-2 ' value={user.displayName} type="text" name="name" placeholder="name"/> <br/>
                <input className='mb-2 ' value={user.email} type="email" name="email" placeholder="email"/> <br/>
                <input className='mb-2 '  type="text" name="name" value={service.name} /> <br/>
                <input className='mb-2 ' type="text" name="address" placeholder="Address"/> <br/>
                <input className='mb-2 ' type="number" name="phone" placeholder="Number"/> <br/>
                <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;