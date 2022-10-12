import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qwwr8c1",
        "template_1qg0jnk",
        form.current,
        "d94WaqDEK8ZNH-mfE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <div className='hr'></div>
        <div className='div'>
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div className='div'>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input
            type='email'
            name='user_email'
            placeholder='Enter your Email address'
          />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
