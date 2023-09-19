import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navs from '../Home/Navs/Navs';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    return (
        <div>
            <Navs></Navs>
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;