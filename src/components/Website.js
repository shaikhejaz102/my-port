import React from 'react'
// import { Link } from 'react-router-dom'
// import image from './shaikh.jpg'
// import image1 from './com.webp'
// import image2 from './computer.jpg'
// import image3 from './screen shot.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

//
import img from "./websites/landing-1.jpg"
import img1 from "./websites/landing-2.jpg"
import img2 from "./websites/landing-3.jpg"
import img3 from "./websites/landing-4.jpg"
import img4 from "./websites/landing-5.jpg"
import img5 from "./websites/landing-6.jpg"
import img6 from "./websites/landing-comparison.jpg"
import img7 from "./websites/landing-education.jpg"
import img8 from "./websites/landing-insurance.jpg"
import img9 from "./websites/landing-lending.jpg"
import img10 from "./websites/landing-portfolio.jpg"
import img11 from "./websites/landing-service-provider.jpg"

import Footer from './Footer';
import { useState } from 'react';
import WebsiteBox2 from './WebsiteBox2';
import WebsiteBox3 from './WebsiteBox3';
import WebsiteBox from './WebsiteBox';
import { NavLink } from 'react-bootstrap';

//count animation
import CountUp from 'react-countup';
//scroll trigger
import ScrollTrigger from 'react-scroll-trigger';

function Web() {

    const [counterOn, setCounterOn] = useState(false)

    // const myStyle = {
    //     position: 'relative',
    //     alignItems: 'center',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignContent: 'center',
    //     justifyContent: 'center',
    //     height: '220vh'
    //   }

    //AOS animation
    AOS.init();

    const [show, setShow] = useState(1)
    return (
        <>
            {/* <div className="web container" style={myStyle}>
                <div className="back row g-0 bg-body-secondary position-relative my-2"  data-aos="fade-up">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <img src={image3} className="w-100" alt="..." />
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <h5 className="mt-0"><b>TextUtilis - Enter The Text to analyze Below</b></h5>
                        <h6><b>Tech-Skills : </b>React Js, JavaScript, HTML, Css and Bootstrap!</h6>
                        <p>Textutils is website convert your Text into Uppercase to Lowercase and Lowercase to Uppercase, and clear Extra spaces from text, Copy text, and Word Counter or Dispaly the reading Time and Display Preview what you writte:</p>
                        <a href="https://shaikhejaz102.github.io/my-app/" className="stretched-link">Go TextUtils</a>
                    </div>
                </div>
                <div className="back row g-0 bg-body-secondary position-relative my-2"  data-aos="fade-up">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <img src={image} className="w-100" alt="..." />
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <h5 className="mt-0"><b>Portfolio - 2 Website</b></h5>
                        <h6><b>Tech-Skills : </b>JavaScript, HTML5, Css3 only!</h6>
                        <p>Portfolio - 2 websites is very similar as main website but developments by - HTML , CSS , JavaScript:</p>
                        <a href="https://shaikhejaz102.github.io/portfolio2/" className="stretched-link">Go Portfolio2</a>
                    </div>
                </div>
                <div className="back row g-0 bg-body-secondary position-relative my-2"  data-aos="fade-up">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <img src={image1} className="w-100" alt="..." />
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <h5 className="mt-0"><b>Gym Website</b></h5>
                        <h6><b>Tech-Skills : </b>JavaScript, HTML5, Css3!</h6>
                        <p>ShowCase Your work, Its Time To Roll Up your Sleeves and create Buzz never-seen-before.</p>
                        <a href="https://shaikhejaz102.github.io/Gym-Website/" className="stretched-link">Go Gym website</a>
                    </div>
                </div>
                <div className="back row g-0 bg-body-secondary position-relative my-2"  data-aos="fade-up">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <img src={image2} className="w-100" alt="..." />
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <h5 className="mt-0"><b>TextDoodle Website - Convert Images to Pdf Free!</b></h5>
                        <h6><b>Tech-Skills : </b>HTML5, Css3, JavaScript and React JS!</h6>
                        <p>Are you ready? Let's go!! <br/> Look E-commerce Website Unlimited Pdf converts Experience.This is a Image to pdf converter,and also converts other file type, The Online Free Converter Idea, With Great Vision.</p>
                        <a href="https://shaikhejaz102.github.io/file-app/" className="stretched-link">Go TextDoodle</a>
                    </div>
                </div>
            </div> */}


            {/** */}

            <section class="bg-gradient height-70 o-hidden">
                <div class="webDiv w-100 position-absolute demo-pages">
                    <div class="row">
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-insurance.html">
                                <img src={img6} alt="Insurance" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-lending.html">
                                <img src={img7} alt="Lending" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-education.html">
                                <img src={img8} alt="Education" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-portfolio.html">
                                <img src={img9} alt="Portfolio" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-service-provider.html">
                                <img src={img10} alt="Service Provider" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-comparison.html">
                                <img src={img11} alt="Comparison" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-1.html">
                                <img src={img} alt="General 1" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-2.html">
                                <img src={img1} alt="General 2" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-3.html">
                                <img src={img2} alt="General 3" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-4.html">
                                <img src={img3} alt="General 4" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-5.html">
                                <img src={img4} alt="General 5" class="webImg rounded" />
                            </a>
                        </div>
                        <div class="colDiv col-6 col-md-4 col-lg-3 mb-3">
                            <a href="landing-6.html">
                                <img src={img5} alt="General 6" class="webImg rounded" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-9">
                            <div class="card shadow-lg">
                                <div class="websites-card card-body p-4 p-md-5">
                                    <h1 class="display-4">Build beautiful, block-based websites.</h1>
                                    <p class="lead">Insight includes everything you'll need to build a beautiful website.</p>
                                    <a href="https://themes.getbootstrap.com/product/insight-multipurpose-business-template/" class="btn btn-primary btn-lg">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** */}
            <section class="middleScetion p-0">
                <div class="container">
                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div class="row align-content-end gutter-0 separated">
                        <div class="col align-content-end">
                            <div class="row mb-2">
                                <div class="col text-center p-5 p-lg-10">
                                    <h2 class="web-h2 display-2 mb-0">
                                        {/* 150+ */}
                                        {counterOn &&
                                        <CountUp start={0} end={150} duration={10} delay={0}/>
                                        }<span>+</span>
                                    </h2>
                                    <p class="lead"><span class="text-black">Unique components</span> and sections.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col bg-white">
                            <div class="row mb-2">
                                <div class="col text-center p-5 p-lg-10">
                                    <h2 class="web-h2 display-2 mb-0">
                                        {/* 30+ */}
                                        {counterOn &&
                                        <CountUp start={0} end={30} duration={10} delay={0}/>
                                        }<span>+</span>
                                        </h2>
                                    <p class="lead"><span class="text-black">Website templates</span> and secondary pages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollTrigger>
                </div>
            </section>

            {/** */}
            <section id="preview" class="bg-white separator-top" style={{ marginTop: '15vh' }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="headDiv col-12 text-center">
                            <h2 class="display-3">Projects Examples</h2>
                            <div class="nav nav-switch mt-3 text-left lavalamp"><div class="lavalamp-object ease" style={{ transitionDuration: "0.2s", width: "166.575px", height: "45px", transform: "translate(-1.22e-05px, 4.88e-05px)" }}></div>
                                <NavLink class=" nav-item nav-link active lavalamp-item" data-toggle="tab" onClick={show=>setShow(1)} style={{ zIndex: "5", position: "relative" }}>Landing Pages</NavLink>
                                <NavLink class=" nav-item nav-link lavalamp-item" data-toggle="tab" onClick={show=>setShow(2)} style={{ zIndex: "5", position: "relative" }}>Inner Pages</NavLink>
                                <NavLink class=" nav-item nav-link lavalamp-item" data-toggle="tab" onClick={show =>setShow(3)} style={{ zIndex: "5", position: "relative" }}>App Pages</NavLink>
                            </div>
                        </div>
                    </div>
                    
                    {show === 1 &&
                    <WebsiteBox/> }
                    {show === 2 &&
                    <WebsiteBox2/> }
                    {show === 3 &&
                    <WebsiteBox3/> }
                </div>
            </section>

            <section>
                <Footer />
            </section>

        </>
    );
}

export default Web;