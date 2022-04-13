import React from 'react';

const Service = (props) => {
    const {name,img,description,price}=props.service;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
};

export default Service;