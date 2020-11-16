import React from 'react';
import Footer from '../Footer/Footer';
import HeaderImg from '../HeaderImg/HeaderImg';
import HouseRent from '../HouseRent/HouseRent';
import Nevbar from '../Nevbar/Nevbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
                <Nevbar></Nevbar>
                <HeaderImg></HeaderImg>
                <HouseRent></HouseRent>
                <Service></Service>
                <Footer></Footer>
        </div>
    );
};

export default Home;