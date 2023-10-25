import React from 'react'
//swipe section
// import image1 from "./websites/swipeFolder/resume.jpg"
import image1 from "./websites/swipeFolder/combined (1).png"
// import image2 from "./websites/swipeFolder/coworking.jpg"
import image2 from "./websites/swipeFolder/combined (4).png"
import image3 from "./websites/swipeFolder/combined (2).png"
// import image4 from "./websites/swipeFolder/fitness.jpg"
import image4 from "./websites/swipeFolder/combined (6).png"
// import image5 from "./websites/swipeFolder/hotel.jpg"
import image5 from "./websites/swipeFolder/combined (10).png"
// import image6 from "./websites/swipeFolder/service.jpg"
import image6 from "./websites/swipeFolder/combined (8).png"

import AOS from 'aos';
import 'aos/dist/aos.css';

const WebsiteBox = () => {
     //AOS animation
     AOS.init();
    return (
        <>
            <div class="row demo-preview" data-aos="fade-up">
                <div class="col">
                    <div class="tab-content" id="demo-1">
                        <div class="tab-pane show active" id="tab-1-1" role="tabpanel" aria-labelledby="tab-1-1">
                            <div class="row gutter-1 gutter-md-3">
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://www.fluencerdigital.com" class="card-img-container">
                                            <img class="card-img" src={image1} alt="App" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://www.fluencerdigital.com">Web Develpment</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/Microsoft/" class="card-img-container">
                                            <img class="card-img" src={image2} alt="Service" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/Microsoft/">Microsoft</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/assement-project/" class="card-img-container">
                                            <img class="card-img" src={image3} alt="Coworking" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/assement-project/">Optimization</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/portfolio2/" class="card-img-container">
                                            <img class="card-img" src={image4} alt="Event" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/portfolio2/">Portfolio Develpment</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="html/landing/fitness.html" class="card-img-container">
                                            <img class="card-img" src={image5} alt="Fitness" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="html/landing/coworking.html">News update</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/Gym-Website/">
                                            <img class="card-img" src={image6} alt="Hotel" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/Gym-Website/">Fitness</a></h5>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteBox;