import React from 'react';
import useService from './Hooks/Use';

const ManageService = () => {
    const [services,setServices]=useService();
    const handelDelete=id=>{
        const proceed=window.confirm('Are you sure you want to delete')
        if(proceed){
    const url=`http://localhost:5000/service/${id}`
    fetch(url,{
        method: 'DELETE',
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        const remaining=services.filter(service=>service._id !== id )
        setServices(remaining)
    })

        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>mage your Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>
                        {service.name}
                        <button onClick={()=>handelDelete(service._id)}>X</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;