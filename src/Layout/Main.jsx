import React from 'react';
import { Outlet } from "react-router-dom";
import NavBer from '../Shared/NavBer/NavBer';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;