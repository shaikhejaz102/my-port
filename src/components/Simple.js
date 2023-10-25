import React from 'react';
// import image from './contact.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

//video 
// import video from "./Logo/pexels-google1.mp4"
// import video from "./pexels-google1.mp4"
import img from "./smal/contact-california.jpg"
import Footer from './Footer';
// import img1 from "./smal/contact-new-york.jpg"

function Simple() {

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
            {/* <div className="conatiner my-5 mx-5" style={myStyle}>

                <div className="d-flex position-relative" style={{ marginBottom: '80px', marginLeft: '50px'}}>
                    <img src={image} style={{width: '20%'}} className="flex-shrink-0 me-3" alt="..."  data-aos="fade-down-right"/>
                    <div style={{color:"#6b6b78"}}  data-aos="fade-down-left">
                        <h6>CONTACT</h6>
                        <h4 className="mt-0">Have You Any Project?<br/>Please Drop a Message</h4>
                        <p>Get in touch and let me know how can help.<br/>Fill out the form and i'll be in touch as soon as possible.</p>
                        <a href="/" className="stretched-link">SEND</a>
                    </div>
                </div> */}

            {/* {This About accordion} */}


            {/* <div className="accordion" id="accordionExample mx-4">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Get Inspired by these examples
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>REASON</strong> Your New Website - Fast, Easy and at a Low Price : Best User Interface Websites, Professional Web Designes and Web Developement, with innovative ideas and dreams come into reality, add analytics in your website to build best User Experience.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Are you ready? Let's go!!
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>LOOK AT THIS</strong> Design and code is not just what it looks like and feels like. Design is how it works.The Experience you feels in the mind comes to reality.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why you Should work with Us!
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>MAKE THINGS BETTER</strong> The ability to create amazing products, Websites, Web desings and Web Developemnt is the number one reason why We love our Work. It also helps that We have the freedom to be creative, work with great people...
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/** */}
            <section>
            <div class="content-wrap d-flex" id="content-wrap">
                <div className="contact-video col-lg-6">
                    <div className="sticky-top overflow-hidden-y" jstcache="0">
                        <video className='smalVideo' autoPlay loop muted playsInline >
                            <source src="./Logo/pexels-google1.mp4" type='video/mp4' />
                        </video>
                    </div>
                </div>
                <div style={{background:'#d5d6e2ab'}}>
                <div class="contact-input py-160 bg-dark" style={{ width: '100%' }}>
                    <div class="contain container">
                        <div class="justify-content-center text-white row">
                            <div className=''>
                                <h1 class="display-4 text-white mt-5 mb-130 aos-init aos-animate" data-aos="fade-up" style={{ fontFamily: 'FontAwesome' }}>Get <span style={{ color: '#a4ff00' }}>in</span> touch<span style={{ color: '#c2ff55' }}>.</span></h1>
                                <form action="#" class="col-lg-10" style={{ marginTop: '10vh' }}><p class="lead fw-medium mb-30">Choose the types of project:</p><div class="gh-xs gv-xs mb-n7 row">
                                    <div class="col-auto col">
                                        <input id="checkboxWebDesign" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxWebDesign" data-aos="fade-up" class="form-label aos-init aos-animate">
                                            <span>Web design</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxAppDesign" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxAppDesign" data-aos="fade-up" class="form-label aos-init aos-animate"><span>App design</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxLogoDesign" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxLogoDesign" data-aos="fade-up" class="form-label aos-init aos-animate"><span>Logo design</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxIllustration" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxIllustration" data-aos="fade-up" class="form-label aos-init aos-animate"><span>AI</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxPhotography" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxPhotography" data-aos="fade-up" class="form-label aos-init aos-animate"><span>Photography</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxWebDevelopment" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxWebDevelopment" data-aos="fade-up" class="form-label aos-init aos-animate"><span>Web Development</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxAppDevelopment" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxAppDevelopment" data-aos="fade-up" class="form-label aos-init aos-animate"><span>App Development</span></label>
                                    </div><div class="col-auto col">
                                        <input id="checkboxBranding" type="checkbox" class="checkbox-btn form-check-input" />
                                        <label for="checkboxBranding" data-aos="fade-up" class="form-label aos-init aos-animate"><span>Branding</span></label>
                                    </div></div><div class="gh-1 gv-3 mt-30 row">
                                        <div data-aos="fade-up" class="col-12 col aos-init aos-animate">
                                            <input placeholder="Your Name *" type="name" class="form-control form-control-lg form-control-white form-control" />
                                        </div><div data-aos="fade-up" class="col-12 col-md-6 aos-init">
                                            <input placeholder="Your Email *" type="email" class="form-control form-control-lg form-control-white form-control" />
                                        </div><div data-aos="fade-up" class="col-12 col-md-6 aos-init">
                                            <input placeholder="Your Phone *" type="phone" class="form-control form-control-lg form-control-white form-control" />
                                        </div><div data-aos="fade-up" class="col-12 col aos-init">
                                            <input placeholder="Company" type="company" class="form-control form-control-lg form-control-white form-control" />
                                        </div><div data-aos="fade-up" class="col-12 col aos-init">
                                            <input placeholder="Title" type="text" class="form-control form-control-lg form-control-white form-control" />
                                        </div><div data-aos="fade-up" class="col-12 col aos-init">
                                            <textarea class="form-control form-control-lg form-control-white" rows="1" placeholder="Message *"></textarea>
                                        </div></div><p class="lead fw-medium mb-30 mt-60 pt-9">Choose the budget:</p><div class="gh-xs gv-xs row">
                                        <div class="col-auto show-on-scroll-ready col">
                                            <input id="checkbox<10000" type="checkbox" class="checkbox-btn form-check-input" />
                                            <label for="checkbox<10000" data-aos="fade-up" class="form-label aos-init"><span>&lt; 10 000</span></label>
                                        </div><div class="col-auto show-on-scroll-ready col">
                                            <input id="checkbox10-20k" type="checkbox" class="checkbox-btn form-check-input" />
                                            <label for="checkbox10-20k" data-aos="fade-up" class="form-label aos-init"><span>10 - 20k</span></label>
                                        </div><div class="col-auto show-on-scroll-ready col">
                                            <input id="checkbox20-30k" type="checkbox" class="checkbox-btn form-check-input" />
                                            <label for="checkbox20-30k" data-aos="fade-up" class="form-label aos-init"><span>20 - 30k</span></label>
                                        </div><div class="col-auto show-on-scroll-ready col">
                                            <input id="checkbox>30000" type="checkbox" class="checkbox-btn form-check-input" />
                                            <label for="checkbox>30000" data-aos="fade-up" class="form-label aos-init"><span>&gt; 30 000</span></label>
                                        </div></div>
                                    <button type="button" name="button" class="btn btn-white btn-with-ball mt-90 btn btn-secondary">submit<span class="btn-ball" style={{ transform: "translateY(0px)" }}></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>

            {/** */}
            <section class="py-15 py-xl-20">
                <div class="container">
                    <div class="row justify-content-center mb-8">
                        <div class="col-lg-10">
                            <h2 class="fw-bold h2-bold"><span class="d-lg-block">Interface that works like magic.</span> Get things
                                ready in minutes.</h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="accordion accordion-highlight" id="accordion-1">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-1">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                            <i class="bi bi-asterisk text-yellow fs-5 me-2"></i> Variable &amp; OpenType fonts
                                        </button>
                                    </h2>
                                    <div id="collapse-1-1" class="accordion-collapse collapse" aria-labelledby="heading-1-1" data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-2">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                            <i class="bi bi-columns text-yellow fs-5 me-2"></i> Grids &amp; Layout
                                        </button>
                                    </h2>
                                    <div id="collapse-1-2" class="accordion-collapse collapse" aria-labelledby="heading-1-2" data-bs-parent="#accordion-1" >
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-3">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                            <i class="bi bi-palette2 text-yellow fs-5 me-2"></i> Color Variables &amp; Styles
                                        </button>
                                    </h2>
                                    <div id="collapse-1-3" class="accordion-collapse collapse" aria-labelledby="heading-1-3" data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-1-4">
                                        <button class="accordion-button fs-lg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1-4" aria-expanded="false" aria-controls="collapse-1-4">
                                            <i class="bi bi-cloud-check text-yellow fs-5 me-2"></i> Cloud Sharing
                                        </button>
                                    </h2>
                                    <div id="collapse-1-4" class="accordion-collapse collapse" aria-labelledby="heading-1-4" data-bs-parent="#accordion-1">
                                        <div class="accordion-body">
                                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                                voluptas. Quibusdam, quia. Accusantium, quo maxime est ullam at voluptas aspernatur. Iure
                                                assumenda labore esse vero ad. Deleniti ea totam dolorem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/** */}
            <section class="inverted overflow-hidden">
                <div class="divImg d-flex flex-column container py-15 py-xl-20 min-vh-75 level-1">

                    <figure class="background background-overlay" style={{ backgroundImage: `url(${img}` }}>
                        <div style={{height:'100%',background:'#0000005e'}}>
                            <div class="row mb-8">
                                <div class="col text-center" style={{margin:'20vh 0 10vh 0'}}>
                                    <h2 class="h2-bottom fs-1 fw-bold">Even more great stuff.</h2>
                                </div>
                            </div>
                            <div class="row g-4 g-lg-5 justify-content-center align-items-center mt-auto">
                                <div class="col-lg-3 text-center">
                                    <h4 class="text lh-sm fw-normal" style={{fontSize:'2.5rem', color:'#e0ff36'}}><span class="text-white">Components</span> &amp; Blocks
                                    </h4>
                                </div>
                                <div class="col-lg-3 text-center">
                                    <h4 class="text lh-sm fw-normal" style={{fontSize:'2.5rem', color:'#e0ff36'}}><span class="text-white">Reusable</span> components</h4>
                                </div>
                                <div class="col-lg-3 text-center">
                                    <h4 class="text lh-sm fw-normal" style={{fontSize:'2.5rem', color:'#e0ff36'}}><span class="text-white">Prototyping</span> &amp; Collaboration
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </figure>

                </div>
            </section >

            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Simple;