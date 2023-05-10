import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const About = (props) =>{
    useEffect(()=>{
        console.log("about")
    },[])
    return (<>
    <div>This is About page</div>
    
    </>)
}

export default About;