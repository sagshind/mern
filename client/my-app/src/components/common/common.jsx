import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../header/header";
import Footer from "../footer/footer";

const common = (props) =>{
    return (<div>
        <Header/>
        <Outlet/>
        <Footer/>
</div>)
}

export default common;