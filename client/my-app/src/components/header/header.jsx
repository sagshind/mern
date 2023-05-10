import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const header = (props) =>{
    return (<div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">about-us</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/events">events</Link></li>
            <li><Link to="/donation">donation</Link></li>
            <li><Link to="/contact-us">contact-us</Link></li>
        </ul>
        <Outlet/>
</div>)
}

export default header;