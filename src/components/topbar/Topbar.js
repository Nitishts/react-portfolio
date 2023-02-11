import React from "react";
import "./topbar.scss";
import {Person,Mail} from "@mui/icons-material"

const Topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Home</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>9632625862</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>nitishkumarts@gmail.com</span>
                    </div>
                    <a href="https://drive.google.com/file/d/1SOFR32Z4fQob5Ccb5gqrgQ5iXr5FiPJo/view?usp=share_link" className="item" target={"_blank"} rel="noreferrer">Get Resume</a>
                </div>
                <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;