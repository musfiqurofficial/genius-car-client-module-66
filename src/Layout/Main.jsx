import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';

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