import React, { useState } from 'react' /*{ useRef, useEffect } */
import image3 from './Ejaz1.jpg'
// import logo from './logo.png'
// import Typed from 'typed.js';
// import img1 from "./Frontend/ANGULAR JS.png"
// import img2 from "./Frontend/BOOTSTRAP.png"
// import img3 from "./Frontend/CSS.png"
// import img4 from "./Frontend/HTML.png"
// import img5 from "./Frontend/JAVASCRIPT.png"
import image from "./Frontend/pexels-photo1.jpeg"
import image1 from "./Frontend/amazon-box-shipping.jpg"
import image4 from "./Frontend/twilio-main-1.jpg"
import image5 from './Frontend/Maersk_.jpg'

//videos
import vid from "./Logo/Script.mp4"
import vid1 from "./Logo/Script1.mp4"
import vid2 from "./Logo/Script2.mp4"
import vid3 from "./Logo/Script3.mp4"
import vid4 from "./Logo/Script4.mp4"
import vid5 from "./Logo/Script5.mp4"
import vid6 from "./Logo/Script6.mp4"
import vid7 from "./Logo/Script7.mp4"

import mobile from "./Frontend/mobile part1.jpg"
import mobile1 from "./Frontend/mobile part2.jpg"
import giphy from "./Frontend/giphy.gif"
import giphy1 from "./Frontend/giphy (1).gif"
import carton from "./Frontend/team-mobile-web.avif"


//animate Videos
import spire from "./Logo/Spire.mp4"


//globe
// import JavaScript from './Globe/JavaScript'
// import * as THREE from "three";
import globeVideo from "./Logo/videoGlobe.mp4"

//swiper
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//pngs for cards
import yesPng from "./icons/accept.png"
import Png1 from "./icons/bank.png"
import Png2 from "./icons/cloud-computing.png"
import Png3 from "./icons/dimmer.png"
import Png4 from "./icons/loading.png"
import Png5 from "./icons/luggage.png"
import Png6 from "./icons/smart-home.png"
import Png7 from "./icons/podcast.png"
import img from "./icons/PowdurImg.png"
import Footer from './Footer'

//count number animation
import CountUp from 'react-countup';
//scroll trigger
import ScrollTrigger from 'react-scroll-trigger';
//AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home1 = (props) => {

  //AOS animation
  AOS.init();

  const [show, setShow] = useState(1)
  const [counterOn, setCounterOn] = useState(true)

  //javascript for scroll
  window.addEventListener("scroll", setScrollVar)
  window.addEventListener("resize", setScrollVar)

  function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty(
      "--scroll",
      Math.min(percentOfScreenHeightScrolled * 100, 100)
    )
  }

  setScrollVar();

  // Linkedin page
  function Linked(value1) {
    // console.log("hello");
    if (value1) {
      window.open("https://www.linkedin.com/in/shaikh-ejaz-72b2b6247", "_target");
    }
    else {
      console.log("Sorry to Server facing Some issue!");
    }
  }


  //framer motion

  // const fadeInAnimationVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   animate: (index)=> ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 0.05 * index,
  //     },
  //   })
  // }

  // const canvas = document.getElementById("myCanvas");
  // const gl = canvas.getContext("webgl");
  // gl.canvas;

  // {buttons for Linkedin or Resume}

  // function Resume(value) {
  //   console.log("Resume has to be download");
  //   if (value) {
  //     window.open("https://drive.google.com/file/d/18qFxeQSppTsJMo-63MtZ3EEILl502Nko/view?usp=drivesdk", '_target');
  //   }
  //   else {
  //     console.log(`You have'nt select!`);
  //   }
  // }

  // function Linked(value1) {
  //   console.log("hello");
  //   if (value1) {
  //     window.open("https://www.linkedin.com/in/shaikh-ejaz-72b2b6247", "_target");
  //   }
  //   else {
  //     console.log("Sorry to Server facing Some issue!");
  //   }
  // }

  //typed js animation
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['<b>FRONT-END DEVELOPER</b>', '<b>REACT JS DEVELOPER</b>', '<b>RESPONSIVE WEB DESIGNER</b>', '<b>WEB DEVELOPER</b>'],
  //     typeSpeed: 50,
  //   });

  // return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);


  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </symbol>
      </svg>

      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle" style={{ zIndex: '10' }}>
        <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (light)">
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#sun-fill"></use></svg>
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-start shadow" aria-labelledby="bd-theme-text">
          <li>
            <a href="#" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true" onClick={props.toggleMode}>
              <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use ></use></svg>
              Scroll Top
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use ></use></svg>
            </a>
          </li>
          <li>
            <a type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false" data-scroll data-scroll-offset="70" onClick={props.toggleMode}>
              <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use></use></svg>
              Scroll Bottom
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use ></use></svg>
            </a>
          </li>
        </ul>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="aperture" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </symbol>
      </svg>

      {/* <main className="">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis d-flex justify-content-between home">
          <div className="col-lg-6 px-0">
            <h1><span style={{ fontSize: '3.5rem', wordSpacing: '12px' }}>HELLO I AM</span></h1>
            <h1 className="display-4"><span style={{ color: 'transparent', fontSize: '7rem' }}><b>SHAIKH EJAZ</b></span></h1>
            <p style={{ fontSize: '2rem' }} className="lead my-3"><span style={{ wordSpacing: '12px' }}>PASSIONATE </span> <span ref={el} style={{ color: 'Blue' }}></span>.</p>
            <button type="button" className="btn btn-outline-primary rounded-pill" onClick={Resume}>Download Resume</button>
            <button type="button" className="btn btn-outline-primary rounded-pill my-2" onClick={Linked} style={{ marginLeft: '10px' }}>Linkedin</button>
          </div>
          <div className="second">
            <img src={image3} style={{ width: '16vw', borderRadius: '20px', position: "relative", right: '100px', transition: '.5s ease', boxShadow: '0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 8px 29px 0 rgba(0, 0, 0, 0.25)' }} alt="" />
          </div>
        </div>
        <div className='curve'></div>
      </main> */}

      <main className='mainDiv' style={{ marginBottom: '-30rem' }}>
        <div>
        </div>

        <div style={{ background: '#000000d6' }}>
          {/* {open === true &&} */}
          <div className='home-h1'>
            <h1 className='myname'>SHAIKHEJAZ.</h1> {/** data-aos="fade-down-right" */}
          </div>

          <div className='SidePara'>
            <span>Web based /01</span>
            <span>Collaborative /02</span>
            <span>Real-time /03</span>
          </div>

          <div className='EjazPara'>
            <div className='d-flex align-items-center'>
              <a onClick={Linked} style={{ cursor: 'pointer' }}><img className='Ejaz' src={image3} alt="" /></a>
              <h3 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }}>2023+</h3>
            </div>
            <span style={{ fontWeight: 'bolder', fontSize: '1.2' }}>Active Frontend Developer</span>
          </div>

          <video className='spire' autoPlay loop muted playsInline >
            <source src={spire} type='video/mp4' />
          </video>

          <div className='backgroundCard'>
            <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease" data-aos-once="false">
              <div className='card1'>
                <a href="https://www.fluencerdigital.com" style={{ color: '#fff' }}>
                  <div className="icon">
                    <i className="fa-regular fa-paper-plane  cardIcon"></i>
                    <i className="fa-regular fa-comment-dots cardIcon"></i>
                  </div>
                  <h4>Realtime</h4>
                  <h4>Collaboration</h4>
                  <hr style={{ border: '4px dotted' }} />
                  <span>Work with your team in real-time and set individual permissions.</span></a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1500" data-aos-easing="ease" data-aos-once="false">
              <div className='card1'>
                <a href="https://shaikhejaz102.github.io/my-app/" style={{ color: '#fff' }}>
                  <div className="icon">
                    <i class="fa-regular fa-square-plus cardIcon"></i>
                  </div>
                  <h4>Text</h4>
                  <h4>Generator</h4>
                  <hr style={{ border: '4px dotted' }} />
                  <span>Generate placeholders texts for your interfaces.</span></a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="2000" data-aos-easing="ease" data-aos-once="false">
              <div className='card1'>
                <a href="https://shaikhejaz102.github.io/Microsoft/" style={{ color: '#fff' }}>
                  <div className="icon">
                    <i class="fa fa-bolt cardIcon"></i>
                    <i class="fa-regular fa-bookmark cardIcon"></i>
                  </div>
                  <h4>Templates</h4>
                  <h4>Library</h4>
                  <hr style={{ border: '4px dotted' }} />
                  <span>A repository of scenes, templates, and objects ready to use.</span></a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="2500" data-aos-easing="ease" data-aos-once="false">
              <div className='card1'>
                <a href="https://shaikhejaz102.github.io/portfolio2/" style={{ color: '#fff' }}>
                  <div className="icon">
                    <i class="fa-regular fa-images cardIcon"></i>
                  </div>
                  <h4>Websites</h4>
                  <h4>Based</h4>
                  <hr style={{ border: '4px dotted' }} />
                  <span>instantly create user interfaces for contacts list, testimonials, etc.</span></a>
              </div>
            </div>
          </div>

          <div className='bottomPara'>
            <span className='bottomPara-span'>The Website Development that keeps your flow with Software development
              and built-in designs</span>
            <span className='dot-span'>...............................................</span>
          </div>

          <div className='d-flex justify-content-end aliign-items-center'>
            <div className="roundPara">
              <span style={{ position: 'absolute', left: '40px', fontWeight: 'bolder', fontFamily: 'system-ui' }}><span style={{ fontSize: '1.4rem' }}>&#129174;</span>How it Works?</span>
            </div>
          </div>

        </div>
      </main >

      <section className='tech '>
        <div className='mx-5'>
          <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui', color: 'gray' }}>Master in Skills.</h1>
        </div>
        <div className="tech-section d-flex align-items-center flex-column">
          {/* <div className="guide1 my-2 d-flex flex-wrap">
            <div className="par mx-5"><img style={{ width: '50%' }} src={img4} alt="" /></div>
            <div className="par mx-5"><img style={{ width: '50%' }} src={img3} alt="" /></div>
            <div className="par mx-5"><img style={{ width: '50%' }} src={img5} alt="" /></div>
            <div className="par mx-5"><img style={{ width: '50%' }} src={img7} alt="" /></div>
          </div> */}
          <div className="guide1 my-2 d-flex ">
            <div className="part " data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease" data-aos-once="false" style={{ marginLeft: '8rem', marginRight: '1rem' }}><video className='Techvideo' autoPlay loop muted playsInline><source src={vid} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease" data-aos-once="false" ><video className='Techvideo' autoPlay loop muted playsInline><source src={vid1} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="1100" data-aos-easing="ease" data-aos-once="false" ><video className='Techvideo' autoPlay loop muted playsInline><source src={vid2} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="1400" data-aos-easing="ease" data-aos-once="false" ><video className='Techvideo' autoPlay loop muted playsInline><source src={vid3} type='video/mp4' alt="" /></video></div>
          </div>
          <div className="guide2 my-5 d-flex">
            <div className="part " data-aos="fade-right" data-aos-delay="1700" data-aos-easing="ease" data-aos-once="false" style={{ marginLeft: '8rem', marginRight: '1rem' }}><video className='Techvideo' autoPlay loop muted playsInline><source src={vid4} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="2000" data-aos-easing="ease" data-aos-once="false"><video className='Techvideo' autoPlay loop muted playsInline><source src={vid5} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="2300" data-aos-easing="ease" data-aos-once="false"><video className='Techvideo' autoPlay loop muted playsInline><source src={vid6} type='video/mp4' alt="" /></video></div>
            <div className="part mx-3" data-aos="fade-right" data-aos-delay="2600" data-aos-easing="ease" data-aos-once="false"><video className='Techvideo' autoPlay loop muted playsInline><source src={vid7} type='video/mp4' alt="" /></video></div>
          </div>
        </div>
      </section>

      <section className='platform bg-body-tertiary py-5'>
        <div className="container d-flex align-items-center">
          <div className="part1">
            <span className='my-3' style={{ color: '#cdff64' }}>unified platform</span>
            <h1 className='col-9 my-3'>A fully integrated suite of web development productions</h1>
            <p className='my-3'>We bring together everything that’s required to build websites and apps that accept all types of features.
              Shaikh’s productions power to web development for <span style={{ color: '#cdff64' }}>online and creative websites, subscriptions businesses, software platforms and marketplaces</span> , and everything in between. </p>
            <button className="btn btn-outline  rounded-pill my-3">Start with us</button>
          </div>
          <div className="part1-half" style={{ marginTop: '5rem' }}>
            <p className='mt-20'>We also help companies <span style={{ color: '#cdff64' }}>beat bugs and fix error, send invoices, issue virtual and physical advice, reduce friction at checkout of website, get websites, manage business websites</span>, and much more.</p>
          </div>
        </div>

        <div className="section-container ">
          <div className="container d-flex">
            <div data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease" data-aos-once="false">
              <img className="giphy1" src={giphy1} alt="" />
            </div>

            <div data-aos="fade-up" data-aos-delay="120" data-aos-easing="ease" data-aos-once="false">
              <img className='mobile' src={mobile} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-delay="140" data-aos-easing="ease" data-aos-once="false">
              <div><img className="giphy" src={giphy} alt="" /></div>
            </div>
            <div data-aos="fade-down" data-aos-delay="160" data-aos-easing="ease" data-aos-once="false">
              <img className='mobile1' style={{ width: '230px', borderRadius: '40px' }} src={mobile1} alt="" />
            </div>
          </div>
          <div className="container d-flex" data-aos="fade-up" data-aos-delay="120" data-aos-easing="ease" data-aos-once="false">
            <div>
              <img className='banner' src={carton} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="third bg-white">
        <div className="sectionThird-background">
          <video className='globevideo' autoPlay loop muted playsInline>
            <source src={globeVideo} type='video/mp4' />
          </video>
          <div className='canvasContainer'>
            {/* <JavaScript className="GlobeEarth" /> */}
          </div>
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className='thirdSection-para'>
            <span style={{ color: '#cdff64' }}>Coding Scale</span>
            <h1 style={{ fontWeight: 'bolder', margin: '30px 0 30px 0' }}>The Backbone for web Development</h1>
            <p className='thirdsmall-para' style={{ width: '32vw' }}>i make re-useable code as easy and programmable as moving data.
              and also dynamic digital solutions provider specializing in website development,mobile app development, and software solutions.
            </p>
            <div className='para-parts'>
              <div>
                <h2>
                  {/* 2023+ */}
                  {counterOn &&
                    <CountUp start={0} end={2023} duration={10} delay={0} />
                  }+
                </h2>
                <p className='count-para' style={{ width: '16vw' }}>Current skills Based</p>
              </div>
              <div>
                <h2>
                  {/* 99.99% */}
                  {counterOn &&
                    <CountUp start={0} end={99} duration={10} delay={0} />
                  }.99%
                </h2>
                <p className='count-para' style={{ width: '16vw' }}>Problem Solving uptime for web services.</p>
              </div>
              <div>
                <h2>
                  {/* 98+ */}
                  {counterOn &&
                    <CountUp start={0} end={98} duration={10} delay={0} />
                  }+
                </h2>
                <p className='count-para' style={{ width: '16vw' }}>Skills Sets to achive the best outputs</p>
              </div>
              <div>
                <h2>
                  {/* 100+ */}
                  {counterOn &&
                    <CountUp start={0} end={100} duration={10} delay={0} />
                  }+
                </h2>
                <p className='count-para' style={{ width: '16vw' }}>Planned, developed, tested, deploying, and maintained web applications.</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>

      <section className="sectionFourth">
        <div className="forth-first">
          <span style={{ color: '#cdff64' }}>Websites reinvention</span>
          <h1 style={{ fontWeight: 'bolder', margin: '30px 0 30px 0' }}>Bring agility to your business</h1>
          <p style={{ width: '60vw' }}>You can use Our services not only to <span style={{ color: '#cdff64' }}>websites development</span> but also to quickly support new markets,
            upgrade existing systems and tools, go direct-to-consumer,and enagage customers with subscriptions and marketplaces.
            Get expert integration guidance from our <span style={{ color: '#cdff64' }}>professional serviceses</span> and so you can value with us faster.</p>
          <button className="btn btn-outline  rounded-pill my-3">Start with us</button>
        </div>
        <div className="forth-second">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="carouselMain">
              <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <img src={image} className="d-block w-100 corousel-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block toyota-caption">
                      <div><img width="128" alt="Toyota carlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/128px-Toyota_carlogo.svg.png" /></div>
                      <div>
                        <h5>Toyota supra mk4</h5>
                        <p>Toyota selected by coutry of japan to power ecommerce for customers and dealers.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image1} className="d-block w-100 corousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block amazon-caption">
                    <div><img style={{ width: '7vw' }} width="512" alt="Amazon logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" /></div>
                    <div>
                      <h5>Amazon business label</h5>
                      <p>Amazon simplifies cross-border ecommerce designs with us.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image4} className="d-block w-100 corousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block twilio-caption">
                    <div><img style={{ width: '7vw' }} width="512" alt="Twilio logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Twilio_logo.png/512px-Twilio_logo.png" /></div>
                    <div>
                      <h5>Twilio international markets</h5>
                      <p>Twilio’s goal of being the leading customer engagement platform meant expanding into international markets.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image5} className="d-block w-100 corousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block maerks-caption">
                    <div><img width="128" alt="Maersk Group Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/128px-Maersk_Group_Logo.svg.png" /></div>
                    <div>
                      <h5>Maerks  global logitsics</h5>
                      <p>Simplifying the supply chain with Maersk.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="forth-third">
          <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel"><img width="128" alt="Toyota carlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/128px-Toyota_carlogo.svg.png" /></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                  </div>
                </div>
              </div>
            </div>
            <button className='slide-btn' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => setShow(1)}><img className='toyotalogo' width="128" alt="Toyota carlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/128px-Toyota_carlogo.svg.png" /></button>
          </div>
          <div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel"><img style={{ width: '6vw' }} width="512" alt="Amazon logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" /></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                  </div>
                </div>
              </div>
            </div>
            <button className='slide-btn' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={() => setShow(2)}><img className='amazonlogo' style={{ width: '6vw' }} width="512" alt="Amazon logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" /></button>
          </div>
          <div>
            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel"><img style={{ width: '7vw' }} width="512" alt="Twilio logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Twilio_logo.png/512px-Twilio_logo.png" /></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                  </div>
                </div>
              </div>
            </div>
            <button className='slide-btn' data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={() => setShow(3)}><img className='twiliologo' style={{ width: '7vw' }} width="512" alt="Twilio logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Twilio_logo.png/512px-Twilio_logo.png" /></button>
          </div>
          <div>
            <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel"><img width="128" alt="Maersk Group Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/128px-Maersk_Group_Logo.svg.png" /></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                    Show a second modal and hide this one with the button below.
                  </div>
                </div>
              </div>
            </div>
            <button className='slide-btn' data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" onClick={() => setShow(4)}><img className='maersklogo' width="128" alt="Maersk Group Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/128px-Maersk_Group_Logo.svg.png" /></button>
          </div>
        </div>
      </section>

      <section className="sectionFive">
        <div className="five-first">
          <span style={{ color: '#cdff64' }}>Built for growth</span>
          <h1 style={{ fontWeight: 'bolder', margin: '30px 0 30px 0' }}>Take your startup further, faster</h1>
          <p style={{ width: '60vw' }}>Startups build on ecommerce to launch faster, adapt as they grow, and <span style={{ color: '#cdff64' }}>automate workflows</span> to do more with less ,
            Build your own API-based integration or use our low-to fully-code solutions.
            which are simple enough for easy implementation and powerful enough to <span style={{ color: '#cdff64' }}>scale as fast</span> and as fast and as far as you need.</p>
        </div>
        <div className="five-second mx-5">
          <div className='card-div1' style={{ marginTop: '25vh' }} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease" data-aos-once="false">
            <div class=" card-main1 mx-5 my-5">
              <div className='overlay-background'>
                <div className='background-card1'></div>
                <div className='inner-card' style={{ position: 'relative' }}>
                  <div className=" min-card">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h5 style={{ fontWeight: 'bolder' }}>Project</h5>
                      <span style={{ borderLeft: '1px solid #cdff64', padding: '2px 10px', color: '#cdff64' }}>Overview</span>
                      <span style={{ borderLeft: '1px solid gray', padding: '2px 10px' }}>Company</span>
                      <span style={{ borderLeft: '1px solid gray', padding: '2px 10px' }}>Templates</span>
                      <span style={{ borderLeft: '1px solid gray', padding: '2px 10px' }}>Partners</span>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 'bolder' }}>RealWorld Projects</h3>
                      <p><img style={{ width: '15px', paddingRight: '5px' }} src={yesPng} alt="" /><span>Incorporate your company</span></p>
                      <p><img style={{ width: '15px', paddingRight: '5px' }} src={yesPng} alt="" /><span>Ideas for founders</span></p>
                      <p><img style={{ width: '15px', paddingRight: '5px' }} src={yesPng} alt="" /><span>Get a websites</span></p>
                      <p><img style={{ width: '15px', paddingRight: '5px' }} src={yesPng} alt="" /><span>Ready to business!</span></p>
                      <h6><img style={{ width: '25px', paddingRight: '5px' }} src={Png1} alt="" />Open account</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Homecard-body card-body">
                <div className='card-smallTitle'><img style={{ width: '40px' }} src={Png2} alt="" /> Project</div>
                <h5 class="card-title">Incorporate your company</h5>
                <p class="card-text">Form a legal entity, issue resolver, problem solving, and start accepting ideas..</p>
                <a href="#" class="a-btn" style={{ fontWeight: 'bolder' }}>Learn about Projects</a>
              </div>
            </div>
          </div>
          <div className='card-div2' style={{ marginTop: '-25vh' }} data-aos="fade-up" data-aos-delay="120" data-aos-easing="ease" data-aos-once="false">
            <div class="card-main2 mx-5 my-5">
              <div className='overlay-background'>
                <div className='background-card2'></div>
                <div className='inner-card' style={{ position: 'relative' }}>
                  <div className="min-card2">
                    <span><div className='d-flex justify-content-center align-items-center' style={{ flexDirection: 'column' }}><img style={{ width: '40px' }} src={Png5} alt="" />
                      <h6 style={{ fontWeight: 'bold' }}>Websites Features</h6>
                    </div></span>
                    <p>Thanks for your time! A experience from us will appear in your statements.</p>
                    <button style={{ background: '#f6e7f6', width: '100%', padding: '10px', borderBottom: '2px solid #d301ff' }}>Join  $0.00</button>
                  </div>
                  <div className="min-card-2">
                    <span><img style={{ borderRadius: '0.5rem 0.5rem 0 0', width: "100%" }} src={img} alt="" /></span>
                    <h6 style={{ fontWeight: 'bold', padding: '10px 0 0 10px' }}>Pure code Developement</h6>
                    <p style={{ paddingLeft: '10px' }}> https://shaikhejaz102.github.io/</p>
                  </div>
                </div>
              </div>
              <div class="Homecard-body card-body">
                <div className='card-smallTitle'><img style={{ width: '40px' }} src={Png3} alt="" />Websites</div>
                <h5 class="card-title">Validate your idea</h5>
                <p class="card-text">Test your product idea by launching websites with little to yes code.</p>
                <a href="#" class="a-btn" style={{ fontWeight: 'bolder' }}>Try projects Links</a>
              </div>
            </div>
          </div>
        </div>
        <div className="five-second mx-5">
          <div data-aos="fade-up" data-aos-delay="140" data-aos-easing="ease" data-aos-once="false">
            <div class=" card-main3 mx-5 my-5">
              <div className='overlay-background'>
                <div className='background-card3'></div>
                <div className='inner-card' style={{ position: 'relative' }}>
                  <div className=" min-card3">
                    <label class="form-label" style={{ fontWeight: 'bold' }}>Email</label>
                    <input class="form-control" type="email" placeholder='example@gmail.com' />
                    <label class="form-label" style={{ fontWeight: 'bold' }}>Number information</label>
                    <input style={{ marginBottom: '5px' }} class="form-control" type="number" name="" id="" placeholder='1234 1234' />
                    <div className='col-md-6 d-flex ' style={{ width: '100%' }}><input class="form-control" type="date" name="" id="" placeholder='MM/YY' /><input class="form-control" type="text" name="" id="" placeholder='comment' /></div>
                    <label htmlFor="" class="form-label" style={{ fontWeight: 'bold' }}>Enter name</label>
                    <input class="form-control" type="text" name="" id="" placeholder='full name' />
                  </div>
                </div>
              </div>
              <div class="Homecard-body card-body">
                <div className='card-smallTitle'><img style={{ width: '40px' }} src={Png6} alt="" />Let's Build</div>
                <h5 class="card-title">Sell to consumers</h5>
                <p class="card-text">Launch a B2C business with a prebuilt websites page that’s optimized for conversion.</p>
                <a href="#" class="a-btn" style={{ fontWeight: 'bolder' }}>Start with our designs</a>
              </div>
            </div>
          </div>
          <div className='card-div4' style={{ marginTop: '-50vh' }} data-aos="fade-up" data-aos-delay="160" data-aos-easing="ease" data-aos-once="false">
            <div class=" card-main4 mx-5 my-5">
              <div className='overlay-background'>
                <div className='background-card4'></div>
                <div className='inner-card' style={{ position: 'relative' }}>
                  <div className=" min-card4">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <span style={{ fontWeight: 'bold' }}>Popular pages</span>
                        <h4 style={{ fontWeight: 'bolder' }}>$20.5</h4>
                        <span>Feb 21, 2021</span>
                      </div>
                      <div><img style={{ width: '50px' }} src={Png4} alt="" /></div>
                    </div>
                    <hr />
                    <p style={{ fontWeight: 'bolder' }}>Download Pages</p>
                    <p><span style={{ fontWeight: 'bold' }}>To</span> <span className='mx-3'>Jenny Rousen</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>From</span><span className='mx-3'>Popular pages</span></p>
                    <p><span style={{ fontWeight: 'bold' }}>Memo</span><span className='mx-3'>Note This is Include for demo</span></p>
                    <button className='btn' style={{ background: '#b6b8d2', width: '100%', fontWeight: 'bolder' }}>Inivite friends</button>
                  </div>
                </div>
              </div>
              <div class="Homecard-body card-body">
                <div className='card-smallTitle'><img style={{ width: '40px' }} src={Png7} alt="" />Let's Build</div>
                <h5 class="card-title">Sell to businesses</h5>
                <p class="card-text">Launch a websites business and collect one-time or recurring ideas for customers.</p>
                <a href="#" class="a-btn" style={{ fontWeight: 'bolder' }}>Explore more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home1