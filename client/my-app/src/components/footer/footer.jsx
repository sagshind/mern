import React from 'react';
import { Link } from 'react-router-dom';


const footer = (props) =>{
    return (<div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">about-us</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/events">events</Link></li>
            <li><Link to="/donation">donation</Link></li>
            <li><Link to="/contact-us">contact-us</Link></li>
        </ul>
</div>)
}

export default footer;