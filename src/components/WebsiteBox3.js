import React from 'react'

import img1 from "./websites/connections.jpg"
import img2 from "./websites/groups.jpg"
import img3 from "./websites/profile.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';

const WebsiteBox3 = () => {
     //AOS animation
     AOS.init();
    return (
        <>
            <div class="row demo-preview" data-aos="fade-up">
                <div class="col">
                    <div class="tab-content" id="demo-1">

                        <div class="tab-pane show active d-flex justify-content-between flex-wrap" id="tab-1-1" role="tabpanel" aria-labelledby="tab-1-1">
                            <div class="row gutter-1 gutter-md-3"></div>

                            <div class="cardSize col-6 col-lg-4">
                                <article class="card card-minimal">
                                    <a href="html/landing/service-2.html" class="card-img-container">
                                        <img class="card-img" src={img1} alt="Service 2" />
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><a href="html/landing/service-2.html">Connections</a></h5>
                                    </div>
                                </article>
                            </div>
                            <div class="cardSize col-6 col-lg-4">
                                <article class="card card-minimal">
                                    <a href="html/landing/studio.html" class="card-img-container">
                                        <img class="card-img" src={img2} alt="Agency" />
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><a href="html/landing/studio.html">Groups</a></h5>
                                    </div>
                                </article>
                            </div>
                            <div class="cardSize col-6 col-lg-4">
                                <article class="card card-minimal">
                                    <a href="html/landing/travel.html" class="card-img-container">
                                        <img class="card-img" src={img3} alt="Travel" />
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center"><a href="html/landing/travel.html">Profile</a></h5>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>
        </div >                
    </>
  )
}

export default WebsiteBox3