import React from 'react';
import GooglMap from '../../GooglMap';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Servieces from '../Services/Servieces';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
         <Servieces></Servieces>
         <Experts></Experts>
         <GooglMap></GooglMap>
        </div>
    );
};

export default Home;