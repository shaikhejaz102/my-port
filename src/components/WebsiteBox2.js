import React from 'react'
// import img from "./websites/portfolio.jpg"
import img from "./websites/swipeFolder/combined.png"
// import img1 from "./websites/studio.jpg"
import img1 from "./websites/swipeFolder/combined (5).png"
// import img2 from "./websites/service-2.jpg"
import img2 from "./websites/swipeFolder/combined (7).png"

import AOS from 'aos';
import 'aos/dist/aos.css';

const WebsiteBox2 = () => {
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
                                        <a href="https://shaikhejaz102.github.io/assement-project/" class="card-img-container">
                                            <img class="card-img" src={img} alt="Learning" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/assement-project/">Checkout form</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/portfolio2/" class="card-img-container">
                                            <img class="card-img" src={img1} alt="Photography" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/portfolio2/">Portfolio contact</a></h5>
                                        </div>
                                    </article>
                                </div>
                                <div class="cardSize col-6 col-lg-4">
                                    <article class="card card-minimal">
                                        <a href="https://shaikhejaz102.github.io/Gym-Website/" class="card-img-container">
                                            <img class="card-img" src={img2} alt="Portfolio" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center"><a href="https://shaikhejaz102.github.io/Gym-Website/">Fitness Services</a></h5>
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

export default WebsiteBox2;