import React from 'react';
import './testimonials.css';
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Steve Rogers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
      name: 'Anthony Stark',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
      name: 'Uhtred B',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
  ];
  return (
    <>
      <div>
        <div className='row mx-5'>
          {testimonials.map((value) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                <div className='card shadow testimonial-card d-flex flex-column'>
                  <span className='description'>{value.text} </span>
                  {/*<span className="stars"></span>*/}
                  <span className='name'>{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
