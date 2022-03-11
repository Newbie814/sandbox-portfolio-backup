import React from 'react';
import './projects.css';
export default function Projects() {
  return (
    <>
      <div className='d-flex flex-column'>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='project-name'>
              <a href='https://mjthomasart.herokuapp.com/'>
                MERN stack E-commerce site
              </a>
            </span>

            <span className='features-technologies-list'>
              SPA with dynamically generated pages and urls, utilizing React and
              React Redux payment/PayPal API, HTML/CSS/JAVASCRIPT frontend,
              Node.js backend, MongoDb API
            </span>
          </div>
          <div>
            <span className='years-completed'>2022</span>
          </div>
        </div>

        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='project-name'>
              <a href='matthew-woodard.com'>Matthew-woodard.com</a>
            </span>

            <span className='features-technologies-list'>
              This portfolio site
            </span>
          </div>
          <div>
            <span className='years-completed'>2022</span>
          </div>
        </div>

        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='project-name'>
              <a href='https://github.com/Newbie814'>GitHub Repo</a>
            </span>
            <span className='features-technologies-list'>
              Various projects, HTML, CSS, and JavaScript designs and animations
            </span>
          </div>
          <div>
            <span className='years-completed'>2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
