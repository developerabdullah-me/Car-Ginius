import React from 'react';

const Service = (props) => {
    const {name,img,title}=props.service;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Service;