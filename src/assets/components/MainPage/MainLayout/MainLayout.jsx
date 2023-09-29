import React from 'react';
import Footer from '../../SharedPages/Footer/footer';
import Menubar from '../../Menu/Menubar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-full	'>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;