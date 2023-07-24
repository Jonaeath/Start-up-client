import React from 'react';
import Header from '../../SharedFile/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedFile/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;