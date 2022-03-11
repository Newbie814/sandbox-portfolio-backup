import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './contact.css';
init('user_gyp2yCtU2fbG7qtOAsScJ');

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(form.current);

    const templateparams = {
      from_name: name + ' ' + email,
      to_name: 'matt@matthew-woodard.com',
      feedback: message,
    };
    emailjs.send('service_aalncxq', 'contact_form', templateparams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('message has been sent');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <>
      <div>
        <div className='contact-me-card row'>
          <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2'>
            <span className='get-in-touch mx-4 my-5'>Get In Touch</span>
            <div className='py-5 d-flex justify-content-center'>
              <lottie-player
                className='contact-animation'
                src='https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json'
                background='transparent'
                speed='1'
                style={{ width: '450px' }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>

          <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
            <form
              ref={form}
              className='d-flex flex-column card-contact-right'
              onSubmit={sendEmail}
            >
              <div className='input-group my-3 d-flex flex-column'>
                <label> Name </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type='text'
                  placeholder=' enter your name'
                  className='input-groups'
                />
              </div>

              <div className='input-group my-3 d-flex flex-column'>
                <label className=''> Email </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type='text'
                  placeholder=' enter your email'
                  className='input-groups'
                />
              </div>
              <div className='input-group my-3 d-flex flex-column'>
                <label className=''> Message </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type='text'
                  placeholder=' enter your message'
                  className='input-groups'
                />
              </div>
              <div className='input-group my-3 d-flex flex-column'>
                <input
                  className='btn btn-success'
                  type='submit'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
