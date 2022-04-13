import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Servieces from '../Services/Servieces';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Servieces></Servieces>
          <Experts></Experts>
        </div>
    );
};

export default Home;