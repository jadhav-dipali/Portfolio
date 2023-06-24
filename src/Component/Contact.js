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
   

    return<>
    <h1 id="conatact-name">Contact Me</h1>
    <div id="contact-container">
    <div id="left-contact">
        <h4>Don't be shy! Hit me up! 👇</h4>
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
     <span className="name-of-the-location-contact">Location</span><img src={location} className="location-of-the-contact-page"/><br></br>
     <iframe src='https://www.google.com/maps/place/Nashik,+Maharashtra/@19.9911053,73.7210775,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3bdd97a8e754b6a5:0x8f844184f00fc6de!2sShenit,+Maharashtra+422502!3b1!8m2!3d19.8115246!4d73.800734!16s%2Fg%2F12hnh8hmb!3m5!1s0x3bddd290b09914b3:0xcb07845d9d28215c!8m2!3d19.9974533!4d73.7898023!16zL20vMDM3dmtr?entry=ttu' /><br></br><br></br>

     <span className="name-of-the-location-contact">Email Id</span><img src={Email} className="location-of-the-contact-page"/><br></br>
     <h4 id="my-email-id">jadhavdipali924@gmail.com</h4>
     </div>
    </div>
    </div>
    </>
}