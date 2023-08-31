import React from "react";
import Sidebar from "../component/Sidebar";

const LayOut = (props) =>{
    return (
        <>
            <Sidebar />
            {props.children}
        </>
        
    )
}
export default LayOut