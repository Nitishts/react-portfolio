import "./works.scss"
import React, { useState } from "react";


const Works = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assests/mobile.png",
            title: "Resto Book",
            desc:
              "Resto book is a restaurant table booking app which is convenient self-service application that the user can efficiently book the table of their preferred restaurant.",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assests/globe.png",
            title: "UMS - User Management System",
            desc:
              "This system refers to use of network technology to collect, manage and analyze customer information. Designed and implemented Rest APIs based on CRUD operations and developed the backend using node JS, express JS framework and NOSQL database MongoDB.",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },
          {
            id: "2",
            icon: "./assests/mobile.png",
            title: "Mobile Application",
            desc:
              "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. .",
            img:
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          },

    ];

    const handleClick = (way)=> {
        way === "left" 
        ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) 
        : setCurrentSlider(currentSlider < data.length-1 ? currentSlider + 1: 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlider *100}vw)` }}>
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">      
                                    <img src={d.icon} alt="" />
                                 </div>
                                 <h2>{d.title}</h2>
                                 <p>
                                    {d.desc}
                                 </p>
                                 <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assests/slider.webp" alt="" />
                        </div>
                        
                    
                    </div>
                </div>
                ))}
            </div>
            <img src="assests/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assests/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works;