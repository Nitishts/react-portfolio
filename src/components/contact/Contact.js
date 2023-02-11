import React from "react";
import  { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss"

const Contact = () => {
    const [message,setMessage] = useState(false)
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(contact);
        emailjs.send('service_qhczumt', 'template_tr7fg9t', contact, 'ibbt9njix50SPivTW')
            .then(res => setMessage(true))
            .catch(err => console.log('Error : ',err.message));
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assests/shake.jpg" alt=""/>

            </div>
            <div className="right">
                <h2>Contact</h2>
                
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" placeholder="Full Name" value={contact.fullName} onChange={(e) => setContact({ ...contact, fullName: e.target.value })} />
                    <input type="email" placeholder="Email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })}/>
                    <input type="number" placeholder="Phone Number" value={contact.phoneNumber} onChange={(e) => setContact({ ...contact, phoneNumber: e.target.value })}/>
                    <textarea placeholder="Message" value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })}></textarea>
                    <button type="submit">Send</button>
                    {message && <span>I'll reply within 24 Hours.</span>}
                </form>
               

            </div>
            
        </div>
    )
}

export default Contact;