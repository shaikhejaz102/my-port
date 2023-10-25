import React, {useState} from 'react'
// import image from './cal.jpg'
// import image1 from './shaikh.jpg'
// import image2 from './computer.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

//images 
import img1 from './services/landing-robo-investor.jpg'
import img5 from './services/landing-mobile-chat.jpg'
import img3 from './services/landing-e-commerce.jpg'
import img4 from './services/landing-course.jpg'
import img6 from './services/landing-automation.jpg'
import img2 from './services/landing-analytics.jpg'

//
import image from "./services/figma.jpg"
import office from "./services/office-2.jpg"
import office1 from "./services/customer-service-1.jpg"
import office2 from "./services/customer-service-3.jpg"

//parallax

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import img7 from "./services/section-1.png"
import img8 from "./services/section-10.png"
import img9 from "./services/section-11.png"
import img10 from "./services/section-12.png"
import img11 from "./services/section-13.png"
import img12 from "./services/section-14.png"
import img13 from "./services/section-16.png"
import img14 from "./services/section-17.png"
import img15 from "./services/section-18.png"
import img16 from "./services/section-19.png"
import img17 from "./services/section-2.png"
import img18 from "./services/section-20.png"
import img19 from "./services/section-21.png"
import img20 from "./services/section-22.png"
import img21 from "./services/section-3.png"
import img22 from "./services/section-4.png"
import img23 from "./services/section-5.png"
import img24 from "./services/section-6.png"
import img25 from "./services/section-8.png"
import img26 from "./services/section-9.png"
import Footer from './Footer';


//count animation
import CountUp from 'react-countup';


function Service() {

    const [counterOn, setCounterOn] = useState(false)

    // const myStyle = {
    //     position: 'relative',
    //     alignItems: 'center',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignContent: 'center',
    //     justifyContent: 'center',
    //     height: '85vh'
    // }


    //AOS animation
    AOS.init();

    return (
        <>
            {/* <div className="Slide conatiner w-100 d-flex justify-content-center my-4" style={myStyle}>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" style={{ width: '65%' }}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={image1} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{ color: 'white' }}>Coder First</h5>
                                <p style={{ color: 'white' }}>As a Front-end web developer work on the visual part of the website the pages visitors see and interact with (also known as the user interface).
                                    They design the physical layout of each page, integrate graphics, and use HTML and JavaScript to enhance the site.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={image2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{ color: 'white' }}>Design Part</h5>
                                <p style={{ color: 'white' }}>A Web designer determines and develops the look and feel for sites, and is responsible fdor site navigation design an visual execution.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={image} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Easy Process</h5>
                                <p>The client sets out with one goal in mind, but this gradually expands, evolves, or changes altogether during the design process — and the next thing you know, we're not only designing and building a website, but also a web app, emails, and push notifications much more.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="alert alert-primary" role="alert" data-aos="flip-up">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Determining the structure and design of web pages,Ensuring user experience determines design choices,Developing features to enhance the user experience.</p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use Creativity to keep things nice and tidy.</p>
                </div>
                <div className="alert alert-primary" role="alert" data-aos="flip-up">
                    <h4 className="alert-heading">Front end!</h4>
                    <p>In the Front-End Development Path, we will complete projects that will shows our ability to use JavaScript animation, build full-scale React apps, and create modern, pixel-perfect web designs with CSS.</p>
                    <hr />
                    <p className="mb-0">Striking a balance between functional and aesthetic design,Ensuring web design is optimized for smartphones.</p>
                </div>
                <div className="alert alert-primary" role="alert" data-aos="flip-up">
                    <h4 className="alert-heading">Build Path!</h4>
                    <p> Building a software developer portfolio can be hard when you are new to software development, but as you create projects you can build your portfolio as you go.</p>
                    <hr />
                    <p className="mb-0">Optimizing web pages for maximum speed and scalability,Maintaining brand consistency throughout the design.</p>
                </div>
            </div> */}


            <Parallax pages={3}>

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    opacity={0.390162}
                    className="parallax" /** style={{ backgroundImage: `url(${img7}),url(${img8})`,backgroundRepeat:'no-repeat', height: '100%' }} */
                >
                    <div class="container-full">
                        <div class="row justify-content-end">
                            <div class="col-12">
                                <div class="row gutter-2">
                                    <div class="col-6 col-md-2 aos-init aos-animate" data-aos="fade-up">
                                        <div class="gutter-2 skrollable skrollable-between" data-top-top="transform: translateY(80vh);" data-top-bottom="transform: translateY(-10vh);" style={{transform: "translateY(79.3652vh)"}}>
                                            <figure class="photo">
                                                <img src={img7} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img8} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img9} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img10} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img11} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img12} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img13} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img14} alt="Image"/>
                                            </figure>
                                            {/** */}
                                            <figure class="photo">
                                                <img src={img24} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img25} alt="Image"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                        <div class="gutter-2 skrollable skrollable-between" data-top-top="transform: translateY(70vh);" data-top-bottom="transform: translateY(-10vh);" style={{transform: "translateY(69.657vh)"}}>
                                            <figure class="photo">
                                                <img src={img15} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img16} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img17} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img18} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img19} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img20} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img21} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img22} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img23} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img24} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img25} alt="Image"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                        <div class="gutter-2 skrollable skrollable-before" data-top-top="transform: translateY(85vh);" data-top-bottom="transform: translateY(-25vh);" style={{transform: "translateY(85vh)"}}>
                                            <figure class="photo">
                                                <img src={img26} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img7} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img8} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img9} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img10} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img11} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img12} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img13} alt="Image"/>
                                            </figure>
                                            {/** */}
                                            <figure class="photo">
                                                <img src={img24} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img25} alt="Image"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="750">
                                        <div class="gutter-2 skrollable skrollable-before" data-top-top="transform: translateY(80vh);" data-top-bottom="transform: translateY(-50vh);" style={{transform: "translateY(80vh)"}}>
                                            <figure class="photo">
                                                <img src={img14} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img15} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img16} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img17} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img18} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img19} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img20} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img21} alt="Image"/>
                                            </figure>
                                            {/** */}
                                            <figure class="photo">
                                                <img src={img24} alt="Image"/>
                                            </figure>
                                            <figure class="photo">
                                                <img src={img25} alt="Image"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}>
                    <section class="pt-6 pt-md-11 pb-8 pb-md-9" style={{background: "linear-gradient(0deg, #7776ff, transparent)" ,borderRadius: "0 0 50px 50px"}}>
                        <div class="container-lg" style={{ height: '90vh',color:'#fff' }}>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-xl-10 text-center">

                                    <h1 class="display-2 mb-4">
                                        A modern design system for your new <span class="text-underline-warning d-none d-xl-inline"><span data-typed="{&quot;strings&quot;: [&quot;SaaS platform&quot;, &quot;data API&quot;, &quot;iOS app&quot;, &quot;online course&quot;, &quot;coworking space&quot;]}">SaaS platform</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></span><span class="text-underline-warning d-xl-none">business</span>.
                                    </h1>

                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-8 col-lg-6 text-center">

                                    <p class="lead">
                                        shaikh's will make your product look modern and professional while saving you precious time.
                                    </p>

                                    <a class="btn lift" href="/" target="_blank">
                                        Purchase
                                    </a>
                                    <a class="btn  lift ms-3" href="/">
                                        <span class="d-sm-none">Docs</span><span class="d-none d-sm-inline-block">Documentation</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={1}
                    sticky={{ start: 0.9, end: 2.5 }}
                >
                    <section style={{ marginTop: '12vh',height: "100vh",display: "flex",justifyContent: "center",alignItems: "center",background: "radial-gradient(#5d5fff, transparent)" }}>
                        <div className="container-lg">
                            <div className="row row-box">
                                <div className="col-12">
                                    <div class="position-relative top-center top-md-start text-warning mt-n8 ms-md-n8">
                                        <div className="card-stack">
                                            <Swiper
                                                effect={'cards'}
                                                grabCursor={true}
                                                modules={[EffectCards]}
                                                loop={true}
                                                className="mySwiper"
                                            >

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden">
                                                            <div class="serviceRow row gx-0" >
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./robo-advisor.html">
                                                                        <img class="card-img-top" src={img1} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#335EEA" opacity=".3"></path><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#335EEA"></path></g></svg>
                                                                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Robo Advisor
                                                                        </h1>

                                                                        <p>
                                                                            Illustrated header, stat cards, testimonial slider, app downloads, case studies, pricing, and jumbo call to action.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./robo-advisor.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden" >
                                                            <div class="serviceRow row gx-0" >
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./analytics-saas.html">
                                                                        <img class="card-img-top" src={img2} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z" fill="#335EEA" opacity=".3"></path><path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" fill="#335EEA"></path></g></svg>                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Analytics SaaS
                                                                        </h1>

                                                                        <p>
                                                                            Animated UI elements and product screenshots, stepped processes, a rich testimonial slider and beautiful pricing.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./analytics-saas.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden">
                                                            <div class="serviceRow row gx-0">
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./e-commerce-platform.html">
                                                                        <img class="card-img-top" src={img3} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M18.145 11.844l-.698 4.185a1 1 0 01-1.165.82L4.913 14.78a1 1 0 01-.783-.709L2.306 7.685a1 1 0 01.961-1.275h13.726l.613-2.627a1.18 1.18 0 011.15-.912h2.064a1.18 1.18 0 110 2.36h-1.128l-1.547 6.613z" fill="#335EEA" opacity=".3"></path><path d="M6.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#335EEA"></path></g></svg>                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Store Platform
                                                                        </h1>

                                                                        <p>
                                                                            Unique hero slider, simple testimonials, physical product shots, mobile screenshot slider, and parallax image gallery.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./e-commerce-platform.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden" >
                                                            <div class="serviceRow row gx-0" >
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./course.html">
                                                                        <img class="card-img-top" src={img4} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm-.5 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm0 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" fill="#335EEA" opacity=".3"></path><path d="M11.352 14.572l2.605-1.78a.5.5 0 00.001-.825l-2.605-1.792a.5.5 0 00-.783.412v3.572a.5.5 0 00.782.413z" fill="#335EEA"></path></g></svg>                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Course
                                                                        </h1>

                                                                        <p>
                                                                            Takeover video modal, checklist value propositions and illustrations, course outline accordion, and testimonial gallery.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./course.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden">
                                                            <div class="serviceRow row gx-0">
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./mobile-chat-app.html">
                                                                        <img class="card-img-top" src={img5} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z" fill="#335EEA"></path><path fill="#335EEA" opacity=".3" d="M7 4v15h10V4z"></path><circle fill="#335EEA" cx="12" cy="21" r="1"></circle></g></svg>                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Enterprise Chat
                                                                        </h1>

                                                                        <p>
                                                                            Simple and visually lightweight. App screenshot header, simple value sections, features grid, and simple 2-tier pricing.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./mobile-chat-app.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <div class="card-stack-item mb-9">
                                                        <div class="ServicesCard card-lg rounded overflow-hidden">
                                                            <div class="serviceRow row gx-0">
                                                                <div class="col-md order-md-1 d-flex align-items-end bg-primary">

                                                                    <a href="./software-automation.html">
                                                                        <img class="card-img-top" src={img6} alt="..." />
                                                                    </a>

                                                                </div>
                                                                <div class="col-md-5 order-md-0 d-flex align-items-center bg-white">
                                                                    <div class="card-body-content card-body text-center">

                                                                        <div class="card-icon icon text-primary-light mx-auto mb-4">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 7a1 1 0 110-2h8a4 4 0 110 8H8a2 2 0 100 4h9a1 1 0 010 2H8a4 4 0 110-8h8a2 2 0 100-4H8z" fill="#335EEA" opacity=".3"></path><path d="M9.707 8.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 6l2.293 2.293zM14.293 20.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L16.586 18l-2.293 2.293z" fill="#335EEA"></path></g></svg>                        </div>

                                                                        <h1 class="font-sans-serif mb-4 mt-auto">
                                                                            Productivity SaaS
                                                                        </h1>

                                                                        <p>
                                                                            Minimal header, stacking feature cards, customer companies slider, blog preview, 3-tier pricing and jumbo call to action.
                                                                        </p>

                                                                        <a class="h6 text-uppercase text-decoration-none mt-auto" href="./software-automation.html">
                                                                            View Landing <i class="fe fe-arrow-right"></i>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={2}
                    sticky={{ start: 3.2, end: 3 }}
                >
                    <section style={{ marginTop: '30vh' }}>

                        <section class="bg-light pt-10 pt-md-12 pb-9 pb-md-11" style={{ padding: '15vw 0 15vw 0' }}>
                            <div class="container-lg">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-md-5 col-lg-6 order-md-1">

                                        <div class="position-relative mb-8 mb-md-0">

                                            <div class="position-absolute top-end text-primary-light me-n8 mt-n8" style={{ left: '34vw', top: '-63px' }}>

                                                <svg width="185" height="186" viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle><circle cx="22" cy="2" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="2" r="2" fill="currentColor"></circle><circle cx="62" cy="2" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="2" r="2" fill="currentColor"></circle><circle cx="102" cy="2" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="2" r="2" fill="currentColor"></circle><circle cx="142" cy="2" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="2" r="2" fill="currentColor"></circle><circle cx="182" cy="2" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="22" r="2" fill="currentColor"></circle><circle cx="22" cy="22" r="2" fill="currentColor"></circle>

                                                    <circle cx="42" cy="22" r="2" fill="currentColor"></circle><circle cx="62" cy="22" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="22" r="2" fill="currentColor"></circle><circle cx="102" cy="22" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="22" r="2" fill="currentColor"></circle><circle cx="142" cy="22" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="22" r="2" fill="currentColor"></circle><circle cx="182" cy="22" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="42" r="2" fill="currentColor"></circle><circle cx="22" cy="42" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="42" r="2" fill="currentColor"></circle><circle cx="62" cy="42" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="42" r="2" fill="currentColor"></circle><circle cx="102" cy="42" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="42" r="2" fill="currentColor"></circle><circle cx="142" cy="42" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="42" r="2" fill="currentColor"></circle><circle cx="182" cy="42" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="62" r="2" fill="currentColor"></circle><circle cx="22" cy="62" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="62" r="2" fill="currentColor"></circle><circle cx="62" cy="62" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="62" r="2" fill="currentColor"></circle><circle cx="102" cy="62" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="62" r="2" fill="currentColor"></circle><circle cx="142" cy="62" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="62" r="2" fill="currentColor"></circle><circle cx="182" cy="62" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="82" r="2" fill="currentColor"></circle><circle cx="22" cy="82" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="82" r="2" fill="currentColor"></circle><circle cx="62" cy="82" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="82" r="2" fill="currentColor"></circle><circle cx="102" cy="82" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="82" r="2" fill="currentColor"></circle><circle cx="142" cy="82" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="82" r="2" fill="currentColor"></circle><circle cx="182" cy="82" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="102" r="2" fill="currentColor"></circle><circle cx="22" cy="102" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="102" r="2" fill="currentColor"></circle><circle cx="62" cy="102" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="102" r="2" fill="currentColor"></circle><circle cx="102" cy="102" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="102" r="2" fill="currentColor"></circle><circle cx="142" cy="102" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="102" r="2" fill="currentColor"></circle><circle cx="182" cy="102" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="122" r="2" fill="currentColor"></circle><circle cx="22" cy="122" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="122" r="2" fill="currentColor"></circle><circle cx="62" cy="122" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="122" r="2" fill="currentColor"></circle><circle cx="102" cy="122" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="122" r="2" fill="currentColor"></circle><circle cx="142" cy="122" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="122" r="2" fill="currentColor"></circle><circle cx="182" cy="122" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="142" r="2" fill="currentColor"></circle><circle cx="22" cy="142" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="142" r="2" fill="currentColor"></circle><circle cx="62" cy="142" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="142" r="2" fill="currentColor"></circle><circle cx="102" cy="142" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="142" r="2" fill="currentColor"></circle><circle cx="142" cy="142" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="142" r="2" fill="currentColor"></circle><circle cx="182" cy="142" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="162" r="2" fill="currentColor"></circle><circle cx="22" cy="162" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="162" r="2" fill="currentColor"></circle><circle cx="62" cy="162" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="162" r="2" fill="currentColor"></circle><circle cx="102" cy="162" r="2" fill="currentColor"></circle>

                                                    <circle cx="122" cy="162" r="2" fill="currentColor"></circle><circle cx="142" cy="162" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="162" r="2" fill="currentColor"></circle><circle cx="182" cy="162" r="2" fill="currentColor"></circle>
                                                    <circle cx="2" cy="182" r="2" fill="currentColor"></circle><circle cx="22" cy="182" r="2" fill="currentColor"></circle>
                                                    <circle cx="42" cy="182" r="2" fill="currentColor"></circle><circle cx="62" cy="182" r="2" fill="currentColor"></circle>
                                                    <circle cx="82" cy="182" r="2" fill="currentColor"></circle><circle cx="102" cy="182" r="2" fill="currentColor"></circle>
                                                    <circle cx="122" cy="182" r="2" fill="currentColor"></circle><circle cx="142" cy="182" r="2" fill="currentColor"></circle>
                                                    <circle cx="162" cy="182" r="2" fill="currentColor"></circle><circle cx="182" cy="182" r="2" fill="currentColor"></circle>
                                                </svg></div>

                                            <img class="position-relative img-fluid rounded shadow-lg" src={image} alt="..." />

                                        </div>


                                    </div>
                                    <div class="col-md-6 col-lg-5 order-md-0">

                                        <h2 class="display-4 mb-4">
                                            We include a Figma file for easy design.
                                        </h2>


                                        <p class="text-muted mb-0">
                                            We include an unofficial Figma file with Goodkit. It's not perfectly organized, but it's component based and covers all our landings, pages, authentication options, and even navigations.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </section >
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    factor={3}
                    sticky={{ start: 5, end: 4 }}
                >
                    <section className='section-parallax'>

                        <div class="cross-circle position-relative top-end text-primary-dark mt-n12" style={{ top: '-5vw', left: '5vw' }}>
                            <svg width="129" height="208" viewBox="0 0 129 208" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#decoration5clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M142.812 201.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M142.812 149.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip2)"><path fill-rule="evenodd" clip-rule="evenodd" d="M142.812 97.281a6.47 6.47 0 1112.939.002 6.47 6.47 0 01-12.939-.002zm1.618 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.81-1.143-1.143 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.937 0zm1.617 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip3)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.813 149.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.938 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.469 6.469 0 1112.937.001 6.469 6.469 0 01-12.938-.001zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.813 97.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip5)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.813 45.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip6)"><path fill-rule="evenodd" clip-rule="evenodd" d="M90.813 175.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.344 1.143a6.469 6.469 0 1112.938.001 6.469 6.469 0 01-12.938-.001zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M90.813 123.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor"></path></g><g clip-path="url(#decoration5clip8)"><path fill-rule="evenodd" clip-rule="evenodd" d="M90.813 71.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor"></path></g><defs><clipPath id="decoration4clip0"><path transform="matrix(0 -1 -1 0 155.75 207.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip1"><path transform="rotate(-90 155.75 0)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip2"><path transform="matrix(0 -1 -1 0 155.75 103.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip3"><path transform="matrix(0 -1 -1 0 51.75 155.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip4"><path transform="matrix(0 -1 -1 0 51.75 103.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip5"><path transform="matrix(0 -1 -1 0 51.75 51.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip6"><path transform="matrix(0 -1 -1 0 103.75 181.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip7"><path transform="matrix(0 -1 -1 0 103.75 129.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath><clipPath id="decoration4clip8"><path transform="matrix(0 -1 -1 0 103.75 77.75)" fill="#fff" d="M0 0h51.75v51.75H0z"></path></clipPath></defs></svg>
                        </div>
                           
                        <section class="pt-9 pt-md-0">
                            <div class="container-lg">
                                <div class="row">
                                    <div class="col-md-8 col-lg-6">

                                        <h2 class="display-4 mb-4">
                                            We work hard to support our customers <span class="text-underline-warning">every day</span>.
                                        </h2>

                                        <p class="fs-lg text-muted">
                                            Good Themes knows our company doesn't thrive without our customers. You will always be the priority for us.
                                        </p>

                                        <div class="row mx-md-n6 mb-8 mb-md-0">
                                            <div class="col-auto px-md-6 border-end">

                                                <div class="h1 mb-0">
                                                    <span data-countup="{&quot;startVal&quot;: 0, &quot;decimalPlaces&quot;: 1}" data-to="99.8" data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">
                                                        {/* 99.8 */}
                                                        {counterOn ||
                                                        <CountUp start={0} end={99} duration={3} delay={10}/>
                                                        }
                                                        </span>.8%
                                                </div>

                                                <div class="text-muted mt-n1">
                                                    Approval
                                                </div>

                                            </div>
                                            <div class="col-auto px-md-6 border-end">

                                                <div class="h1 mb-0">
                                                    <span data-countup="{&quot;startVal&quot;: 0}" data-to="24" data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">
                                                        {/* 24 */}
                                                        {counterOn ||
                                                        <CountUp start={0} end={24} duration={3} delay={10}/>
                                                        }
                                                        </span>hr
                                                </div>

                                                <div class="text-muted mt-n1">
                                                    Turnaround
                                                </div>

                                            </div>
                                            <div class="col-auto px-md-6">

                                                <div class="h1 mb-0">
                                                    <span data-countup="{&quot;startVal&quot;: 0}" data-to="100" data-aos="" data-aos-id="countup:in" class="aos-init aos-animate">
                                                        {/* 100 */}
                                                        {counterOn ||
                                                        <CountUp start={0} end={100} duration={3} delay={10}/>
                                                        }
                                                        </span>%
                                                </div>

                                                <div class="text-muted mt-n1">
                                                    Effort
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
       
                                <div class="row mt-md-n9" style={{ height: '100vh' }}>
                                    <div class="col-12">

                                        <div class="img-grid img-grid-3">
                                        <ParallaxLayer offset={0.3} speed={0.06}>
                                            <div class="img-grid-item photoDiv" >

                                                <img class="img-fluid border border-4 border-md-7 border-white shadow" src={office} alt="..." data-jarallax-element="-65" style={{ position: "relative", zIndex: "0", transform: "translate3d(0px, 237.631px, 0px)" }} />

                                            </div>
                                            </ParallaxLayer>
                                            <ParallaxLayer offset={0.4} speed={0.05}>
                                            <div class="img-grid-item photoDiv1">

                                                <img class="img-fluid border border-4 border-md-7 border-white shadow" src={office1} alt="..." data-jarallax-element="-40" style={{ position: "relative", zIndex: "0", transform: "translate3d(0px, 118.442px, 0px)" }} />

                                            </div>
                                            </ParallaxLayer>
                                            <ParallaxLayer offset={0.2} speed={0.03}>
                                            <div class="img-grid-item photoDiv2">

                                                <img class="img-fluid border border-4 border-md-7 border-white shadow" src={office2} alt="..." data-jarallax-element="-25" style={{ position: "relative", zIndex: "0", transform: "translate3d(0px, 107.588px, 0px)" }} />

                                            </div>
                                            </ParallaxLayer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                           
                    </section >

                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    factor={3}
                    sticky={{ start: 6.7, end: 6 }}
                    style={{height:'0px'}}
                >
                <section>
                    <Footer/>
                </section>
                </ParallaxLayer>
            </Parallax >
        </>
    )
}

export default Service;