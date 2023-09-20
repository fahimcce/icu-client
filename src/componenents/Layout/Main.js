import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navs from '../Home/Navs/Navs';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const allmedicine = location.pathname.includes('allmedicine');
    const allicu = location.pathname.includes('allicu');
    const alllab = location.pathname.includes('alllab');
    return (
        <div>
            <Navs></Navs>
            <Outlet></Outlet>
            {isLogin || allmedicine || allicu || alllab || <Footer></Footer>}
        </div>
    );
};

export default Main;