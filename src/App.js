import { useState, useEffect, useRef } from 'react';
import './styles.css';
import Contact from './Contact';
import Education from './Education';
import Programming from './Programming';
import Work from './Work';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Typed from 'typed.js';

export default function App() {
  const [education, setEducation] = useState(false);
  const [workHistory, setWorkHistory] = useState(false);
  const [programmings, setProgrammings] = useState(false);
  const [projects, setProjects] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "Husband",
  //       "Father ",
  //       "Life-Long Learner",
  //       "Problem Solver",
  //       "Web Developer"
  //     ],
  //     startDelay: 0,
  //     typeSpeed: 100,
  //     backSpeed: 20,
  //     backDelay: 100,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: false,
  //     autoInsertCss: true
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  const el = useRef(null);
  function SetAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgrammings(false);
    setProjects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    // <div className="App" id="home">
    //   <div className="navbar-option-mobile bg-new">
    //     <div className="d-flex flex-row justify-content-between">
    //       <span className="brand-name d-flex align-items-center">
    //         MW Solutions
    //       </span>
    //       <div className="bars mx-2" onClick={() => setOpenNav(!openNav)}></div>
    //     </div>
    //   </div>
    <div className='App'>
      <div className='navbar-option-mobile bg-new '>
        <div className='d-flex flex-row justify-content-between'>
          <span className='brand-name d-flex align-items-center justify-content-center'>
            MW Solutions
          </span>
          <div
            className={
              !openNav
                ? 'bars mx-2 transition-all '
                : ' transition-all open bars mx-2 '
            }
            style={{ background: openNav && '#02203c' }}
            onClick={() => setOpenNav(!openNav)}
          ></div>
        </div>
      </div>

      <nav
        className={
          !openNav
            ? 'd-flex flex-rows navbar-new bg-new px-9 py-5 transition-all'
            : 'd-flex flex-rows navbar-fixed-new bg-new px-9 py-5 transition-all'
        }
      >
        <span className='brand-name'>Matthew Woodard</span>
        <div className='d-flex flex-rows'>
          <a
            href='#home'
            className='mx-4 nav-item'
            onClick={() => setOpenNav(false)}
          >
            Home
          </a>
          <a
            href='#about-me'
            className='mx-4 nav-item'
            onClick={() => setOpenNav(false)}
          >
            About me
          </a>
          <a
            href='#resume'
            className='mx-4 nav-item'
            onClick={() => setOpenNav(false)}
          >
            Resume
          </a>
          <a
            href='#testimonials'
            className='mx-4 nav-item'
            onClick={() => setOpenNav(false)}
          >
            Testimonials
          </a>
          <a
            href='#contactme'
            className='mx-4 nav-item'
            onClick={() => setOpenNav(false)}
          >
            Contact
          </a>
        </div>
      </nav>
      <div className='herosection px-10 py-2'>
        <div className='herosection-2 row justify-content-center'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='d-flex flex-column justify-content-center Im-text-section'>
              <span className='Im-text'>
                I'm <span className='name-Im-text'>Matthew Woodard</span>
              </span>
              <span
                className='Im-text-dad py-2'
                ref={el}
                style={{ minHeight: '65px' }}
              >
                {/*Husband, Dad, Life-Long Learner, and Problem Solver*/}
              </span>
              <span className='Im-text-subheading'>
                Global problem diagnostics and and solutions
              </span>

              <div className='d-flex flex-row justify-content-center mt-5 button-row'>
                <a href='#contact-me' className='btn-hire-me'>
                  Hire Me
                </a>
                <a
                  href='https://res.cloudinary.com/dylvkdabj/image/upload/v1645838560/website%20pics%20family/resume-2011_mobhgj.pdf'
                  className='btn-resume-me'
                >
                  Get Resume
                </a>
                <a
                  href='https://github.com/Newbie814'
                  className='btn-hire-me git-hub'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='d-flex justify-content-center custom-div-outer-img'>
              <img
                className='img-fluid custom-img'
                alt='heroimage'
                src='https://res.cloudinary.com/dylvkdabj/image/upload/v1645684066/website%20pics%20family/family-wooden-fence_k7jq2t.jpg'
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className='about-me-section about-me-inside my-5' id='about-me'>
        <div className='d-flex flex-column'>
          <span className='about-me-text'>About me</span>
          <span className='why-text-sub'>Why choose me?</span>
          <div className='row justify-content-center shadow-lg my-5'>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
              <lottie-player
                className='lottie-1'
                src='https://assets8.lottiefiles.com/packages/lf20_efbizstn.json'
                background='transparent'
                speed='1'
                /*style={{ width: "500px", height: "500px" }}*/
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
              <span className='some-text-about-me'>
                Full Stack web developer with background knowledge of MERN stack
                with redux, along with a focus on applications that efficiently
                solve real world problems. I have a history of management in
                multiple industries, as well as a decade of running my own
                business.
              </span>
              <span className='few-highlights'>
                <span className='few-text few-highlights'>
                  Here are a few highlights:
                </span>
                <span className='few-list'>
                  <ul>
                    <li>Full stack e-commerce site with MERN and Redux</li>
                    <li>CSS and JavaScript animation projects</li>
                    <li>Two Full Stack WebDev courses on Udemy</li>
                    <li>
                      Experience with Postman, MongoDB, Atlas, and Compass
                    </li>
                    <li>
                      Experience with Git local and remote version control
                    </li>
                    <li>
                      Developing a food categorization library with TensorFlow
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='resume-outer-section d-flex flex-column'>
        <span className='about-me-text' id='resume'>
          Resume
        </span>
        <span className='why-text-sub'>My bio details</span>
        <div
          className='resume-new-section row'
          style={{ width: '70%', marginInline: 'auto' }}
        >
          <div className='col-lg-4 col-md-4 resume-left-section d-flex  px-0 shadow-lg flex-row'>
            <div className='d-flex flex-column bg-new text-white'>
              <span className='icons-span'>
                <i className='fas fa-user-graduate'></i>
              </span>
              <span className='icons-span'>
                <i className='fas fa-solid fa-briefcase'></i>
              </span>
              <span className='icons-span'>
                <i className='fas fa-solid fa-keyboard'></i>
              </span>
              <span className='icons-span'>
                <i className='fas fa-solid fa-laptop-code'></i>
              </span>
            </div>
            <div className='d-flex flex-column'>
              <span
                className={
                  education === false
                    ? ' resume-options-items'
                    : ' selected resume-options-items'
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workHistory === false
                    ? ' resume-options-items'
                    : ' selected resume-options-items'
                }
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programmings === false
                    ? ' resume-options-items'
                    : ' selected resume-options-items'
                }
                onClick={() => {
                  ChangeState(setProgrammings, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? ' resume-options-items'
                    : ' selected resume-options-items'
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className='col-lg-8 col-md-8 resume-right-section'>
            {education === true && <Education />}
            {workHistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div className='testmonials-part my-5' id='testimonials'>
        <div className='testimonials-inner-part d-flex flex-column'>
          <span className='about-me-text'>Testimonials</span>
          <span className='why-text-sub mb-5'>
            What my clients say about me{' '}
          </span>
          <Testimonials />
        </div>
      </div>

      <div className='contact-me-part ' id='contact-me'>
        <div className='relative-bg'> </div>

        <div className='contact-inner-part d-flex flex-column'>
          <span className='about-me-text'>Contact Me</span>
          <span className='why-text-sub mb-5'></span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
