import React from 'react';

import { useForm } from "react-hook-form";
const Addservices = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data);
    const url=`http://localhost:5000/service`
    fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
  }
    return (
        <div className="w-50 mx-auto">
            <h1>please Add Now</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='name' {...register("name" )} />
      <textarea className='mb-2' placeholder='description' {...register("description", )} />
      <input className='mb-2' placeholder='price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='img' type="text" {...register("img")} />
      <input className='mb-2' placeholder='' type="submit" />
    </form>
        </div>
    );
};

export default Addservices;