
import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            backSpeed:60,
            strings:["Engineer","Developer"],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assests/nitish.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi , I'm</h2>
                    <h1>Nitish Kumar T S</h1>
                    <h3>
                       Software <span ref={textRef}></span></h3>
                </div>
                
            </div>
        </div>
    )
}

export default Intro;