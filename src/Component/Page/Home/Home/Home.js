import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Expertise from '../Expertise/Expertise';
import SuccessStories from '../Success/SuccessStories';


const Home = () => {
    return (
    <div>
        <Banner></Banner>
        <About></About>
        <Expertise></Expertise>
        <SuccessStories></SuccessStories>
    </div>
    );
};

export default Home;