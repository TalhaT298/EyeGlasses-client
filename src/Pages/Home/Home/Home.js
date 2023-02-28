import React from 'react';
import EyeglassCustomers from '../../EyeglassCustomers/EyeglassCustomers';
import PutOn from '../../PutOn/PutOn';
import Top from '../../Top/Top';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Glasses from '../Glasses/Glasses';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Glasses></Glasses>
            <EyeglassCustomers></EyeglassCustomers>
            <PutOn></PutOn>
            <Top></Top>
        </div>
    );
};

export default Home;