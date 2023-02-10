import React from "react";
import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <div>
    <div id='contact'>
      <h3>
    Sent us Email
      </h3>
      <div className='contact-input'>
        <input type='email' placeholder='Email' />
      </div>
      <br />
      <div className='contact-input'>
        <input type='email' placeholder='username' />
      </div>
      <br />
      <div className='contact-inputm'>
        <input type='email' placeholder='Write youre Message here' />
      </div>
      <br />
      <div>
      <button className='contact-button'>
            Sent
      </button>
      </div>
      
    </div>
    </div>
   
    </LayoutFull>
  );
};

export default ContactPage;
