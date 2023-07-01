import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Style/contact.css"
import location from "../images/location.jpg"
import Email from "../images/email.png"

export default function Contact(){
    const [data , setData] = useState({
        name:"",
        subject:"",
        email:"",
        message:""
    })

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0pb5son', 'template_fz9fl8d', form.current, 'TwFd1Du5OZfV_ARDX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setData({
            name:"",
            subject:"",
            email:"",
            message:""
        })
    };
   

    return<div id="contacts">
    <h1 id="conatact-name">Contact Me</h1>
    <div id="contact-container">
    <div id="left-contact">
        <h3>Hire Me👇</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br></br>
      <input type="text" name="user_name" placeholder='Enter Your Name' onChange={(e)=>setData({...data,name:e.target.value})} value={data.name} required/><br></br>
      <label>Subject</label><br></br>
      <input type="text" name="user_subject" placeholder='Enter Subject' onChange={(e)=>setData({...data,subject:e.target.value})} value={data.subject} required/><br></br>
      <label>Email</label><br></br>
      <input type="email" name="user_email" placeholder='Enter Your Email Id' onChange={(e)=>setData({...data,email:e.target.value})} value={data.email} required/><br></br>
      <label>Message</label><br></br>
      <textarea name="message" placeholder='Enter the message for Dipali' onChange={(e)=>setData({...data,message:e.target.value})} value={data.message}  required/><br></br>
      <div id="btn-cont"><button type="submit" >Send</button></div>
    </form>
    </div>
    <div id="right-contact">
        <div id="contact-details-wrap">
     <span className="name-of-the-location-contact location-contact-name">Location</span><img src={location} className="location-of-the-contact-page"/><br></br>
     <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=nashik maharashtra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" id="iframe-map"></iframe></div></div><br></br><br></br>

     <span className="name-of-the-location-contact">Email Id</span><img src={Email} className="location-of-the-contact-page"/><br></br>
     <h4 id="my-email-id">jadhavdipali924@gmail.com</h4>
     </div>
    </div>
    </div>
    </div>
}