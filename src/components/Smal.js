import React from 'react'
import { Link } from 'react-router-dom'
// import image from './ecommerce-business.jpg'
// import image1 from './to-do-list.jpeg'
// import image2 from './Analog.png'
// import image3 from './calculator.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

//
import img from './smal/background.jpg'
import img1 from './smal/logo-1.png'
import img2 from './smal/logo-2.png'
import img3 from './smal/logo-3.png'
import img4 from './smal/logo-4.png'
import img5 from './smal/logo-5.png'
import img6 from './smal/logo-6.png'

//projects
// import pro from "./smal/blog-single-crop.jpg"
import pro from "./smal/combined (1).png"
// import pro1 from "./smal/landing-crop.jpg"
import pro1 from "./smal/combined (3).png"
// import pro2 from "./smal/digital-crop.jpg"
import pro2 from "./smal/combined (5).png"
// import pro3 from "./smal/rtl-1.jpg"
import pro3 from "./smal/combined (7).png"
// import pro4 from "./smal/rtl-2.jpg"
import pro4 from "./smal/combined (9).png"
// import pro5 from "./smal/rtl-3.jpg"
import pro5 from "./smal/combined (11).png"
// import pro6 from "./smal/rtl-4.jpg"
import pro6 from "./smal/combined (13).png"
import pro7 from "./smal/software-crop.jpg"

//parallax

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

//Swiper
import 'swiper/css/free-mode';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';


function Smal() {

    // const myStyle = {
    //     position: 'relative',
    //     alignItems: 'center',
    //     display: 'flex',
    //     alignContent: 'center',
    //     justifyContent: 'center',
    //     height: '85vh'
    //   }

    //AOS animation
    AOS.init();

    return (
        <>
            {/* <div className="container d-flex justify-content-between" style={{{myStyle}> 
                <div class="card my-2" style={{{{width: '18rem'}} data-aos="fade-left">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">Meme Generator Page is definitely an excellent User-friendly app !<br/> and the best freeware Memes for andriod..</p>
                        <p class="card-text">
                            <a href="https://shaikhejaz102.github.io/Meme-Generator/" class="stretched-link text-danger" style={{{{position: 'relative'}}>This is Meme Generator Website, The Online Fetching Store Data, With Great Vision.</a>
                        </p>
                        <p class="card-text bg-body-tertiary" style={{{{transform: 'rotate(0)'}}>
                            This <Link  to="/" class="text-warning stretched-link">Read more</Link > will be redirect to the new paragraph, for More details.
                        </p>
                    </div>
                </div>
                <div class="card my-2" style={{{{width: '18rem'}} data-aos="fade-left">
                    <img src={image1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Create Your To-Do List</h5>
                        <p class="card-text">Save Some quick text to build on the title and make up the bulk of the content.</p>
                        <p class="card-text">
                            <a href="https://shaikhejaz102.github.io/Todo/" class="stretched-link text-danger" style={{{{position: 'relative'}}>Everyone loves checking things off Your TO-DO List anytime anywhere.</a>
                        </p>
                        <p class="card-text bg-body-tertiary" style={{{{transform: 'rotate(0)'}}>
                            This <Link  to="/" class="text-warning stretched-link">Read more</Link > will be redirect to the new paragraph, for More details.
                        </p>
                    </div>
                </div>
                <div class="card my-2" style={{{{width: '18rem'}} data-aos="fade-left">
                    <img src={image2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Analog Watch</h5>
                        <p class="card-text">Time Is precious So Dont waste it Look At clock !<br/> Be the Kings If Good Times!</p>
                        <p class="card-text">
                            <a href="https://shaikhejaz102.github.io/Analog/" class="stretched-link text-danger" style={{{{position: 'relative'}}>You will never "Find" time for everything. if you want time, you must make it.</a>
                        </p>
                        <p class="card-text bg-body-tertiary" style={{{{transform: 'rotate(0)'}}>
                            This <Link to="/" class="text-warning stretched-link">Read more</Link > will be redirect to the new paragraph, for More details.
                        </p>
                    </div>
                </div>
                <div class="card my-2" style={{{{width: '18rem'}} data-aos="fade-left">
                    <img src={image3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Stylish - CalCultor</h5>
                        <p class="card-text">Some Thing Calculate in Your Mind -<br/> So come here ,its Easy, Smiple and Stylish Calculator.</p>
                        <p class="card-text">
                            <a href="https://shaikhejaz102.github.io/Calculator/" class="stretched-link text-danger" style={{{{position: 'relative'}}>I Punched those Numbers into my calculator... And It Makes A Happy Face.</a>
                        </p>
                        <p class="card-text bg-body-tertiary" style={{{{transform: 'rotate(0)'}}>
                            This <Link to="/" class="text-warning stretched-link">Read more</Link > will be redirect to the new paragraph, for More details.
                        </p>
                    </div>
                </div>
            </div> */}

            <Parallax pages={4}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    style={{ backgroundImage: `url(${img})`, height: '100%' }}>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                >
                    <section>
                        <div>
                            <div className=''>
                                <div class="caption">
                                    <div class="container">
                                        <div class="row justify-content-center vh-100">
                                            <div class="center-div col-md-8  text-center"> {/**align-self-center */}
                                                <h1 data-swiper-parallax="-100%" class="display-2" style={{ transform: "translate3d(0%, 0px, 0px)" }}>A <b>coworking space</b> that feels like home.</h1>
                                                <a href="" class="btn btn-rounded btn-white px-5">Check Availability</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1}
                    factor={1}
                    sticky={{ start: 0.9, end: 2.5 }}
                >
                    <section style={{ border: "0.4px solid #e5e5e5", background: '#fff' }}>
                        <div class="smalDiv container">
                            <div class="row justify-content-center" >
                                <div class="col-md-10 col-lg-8">
                                    <h3 class="text-decorated text-decorated--padding">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/** */}

                    <section class="separator-top1" style={{ background: '#fff' }}>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img1} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img2} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img3} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img4} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img5} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img6} className='logo' alt="Logo" />
                            </div>
                        </div>

                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img1} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img2} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img3} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img4} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img5} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img6} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img1} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img2} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img3} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img4} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img5} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img6} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img1} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img2} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img3} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img4} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img5} className='logo' alt="Logo" />
                            </div>
                        </div>
                        <div class="owl-item cloned" style={{ width: "211.667px" }}>
                            <div class="logoDiv">
                                <img src={img6} className='logo' alt="Logo" />
                            </div>
                        </div>
                    </section >
                </ParallaxLayer>

                {/** */}
                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={2}
                    sticky={{ start: 1.9, end: 4.5 }}
                >
                    <section class="projectLine bg-light">
                        <div class="container">
                            <div class="row" style={{color:'gray'}}>
                                <div class="col-lg-4">
                                    <h2>Our Projects</h2>
                                </div>
                                <div class="col-lg-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae esse rem nesciunt quos, porro ratione reprehenderit unde fuga commodi incidunt fugiat iure omnis eaque autem animi nemo explicabo cum earum.</p>
                                </div>
                            </div>
                            <div class="d-flex" data-aos="fade-left">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={100}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='swiper-slide' style={{marginRight:'70px'}}>
                                        <div class="owl-item active" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/Microsoft/" >
                                                    <img class="user-photo" src={pro} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/Microsoft/" >
                                                    <h4>Websites Dev</h4>
                                                    <span>Creative Experience in Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide' style={{marginRight:'70px'}}>
                                        <div class="owl-item active" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/google-app/" >
                                                    <img class="user-photo" src={pro1} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/google-app/" >
                                                    <h4>Mobile App</h4>
                                                    <span>Experience in Mobile App dev</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide' >
                                        <div class="owl-item active" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/portfolio2/" >
                                                    <img class="user-photo" src={pro2} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/portfolio2/" >
                                                    <h4>Artifitial inteligence</h4>
                                                    <span>Building Al Expertise and Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <div class="owl-item" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/file-app/" >
                                                    <img class="user-photo" src={pro3} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                    <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/file-app/">
                                                    <h4>Custom Software dev</h4>
                                                    <span>Experience in Designing and dev in custome software</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <div class="owl-item" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/my-app/" >
                                                    <img class="user-photo" src={pro4} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                    <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/my-app/">
                                                    <h4>Ecommerce Websites</h4>
                                                    <span>Head of Experience Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <div class="owl-item" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://shaikhejaz102.github.io/Page-transition/">
                                                    <img  class="user-photo" src={pro5} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                <a style={{color:'#fff'}} href="https://shaikhejaz102.github.io/Page-transition/">
                                                    <h4>Fitnesses and Foods related</h4>
                                                    <span>Head of Experience Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <div class="owl-item" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="https://www.fluencerdigital.com" >
                                                    <img class="user-photo" src={pro6} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                <a style={{color:'#fff'}} href="https://www.fluencerdigital.com" >
                                                    <h4>Payments gateways Websites</h4>
                                                    <span>Head of Experience Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                    </a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <div class="owl-item" style={{ width: "416.667px", marginRight: "10px" }}>
                                            <figure class="user">
                                                <a href="" >
                                                    <img class="user-photo" src={pro7} alt="Avatar" />
                                                </a>
                                                <figcaption class="user-caption">
                                                    <h4>Build Websites</h4>
                                                    <span>Head of Experience Design</span>
                                                    <ul class="socials bordered">
                                                        <li><i class="fab fa-facebook-f" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-instagram" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-twitter" aria-hidden="true"></i></li>
                                                        <li><i class="fab fa-linkedin" aria-hidden="true"></i></li>
                                                    </ul>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>
            </Parallax>
            {/** */}

        </>
    );
}

export default Smal;