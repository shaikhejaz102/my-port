import React from 'react'
import { Link } from 'react-router-dom'
// import image from './html-image.webp'
// import image1 from './introduction-CSS-cover.webp'
// import image2 from './javascript-image.jpg'
// import image3 from './nextjs-image.jpeg'
// import image4 from './myphoto.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import frontend from "./frontend_image-scaled.webp"
import designer from "./professional.png"

import img1 from "./services/screens01.png"
import img2 from "./services/screens02.png"

import picture from './typing-clipart.png'
import picture1 from './3411109-removebg-preview.png'
import picture2 from './3900527-removebg-preview.png'
import Footer from './Footer';


function card(props) {

    // const myStyle = {
    //     position: 'relative',
    //     alignItems: 'center',
    //     display: 'flex',
    //     alignContent: 'center',
    //     justifyContent: 'center',
    //     height: '110vh'
    // }

    function Resume(value) {
        // console.log("Resume has to be download");
        if (value) {
            window.open("https://drive.google.com/file/d/18qFxeQSppTsJMo-63MtZ3EEILl502Nko/view?usp=drivesdk", '_target');
        }
        else {
            console.log(`You have'nt select!`);
        }
    }

    //AOS animation
    AOS.init();

    return (
        <>
            {/* <div className="my container  d-flex justify-content-center position-relative">
                <img src={image4} style={{ width: '20%', marginTop: '70px', borderRadius: '50px' }} className="myImg flex-shrink-0 me-3" alt="..." data-aos="fade-right" />
                <div style={{ marginTop: '70px' }} data-aos="fade-left">
                    <h5 style={{ fontSize: '40px' }}><span style={{ color: 'Blue' }}><b>Shaikh Ejaz</b></span></h5>
                    <p className='mt-0' style={{ color: '#6b6b78' }}>● I am good at HTML, CSS, JavaScript and ReactJS but still enhancing my skills to the next level.<br />
                        ● Gained some experience of how professionals write their codes and how to keep code clean.<br />
                        ● Fully committed to designing and developing innovative web based materials that users will
                        love.<br />
                        ● Excellent team player, skilled in managing people and processes while developing a motivated,<br />
                        high performing team who is eager to take on challenges and work collaboratively to
                        contribute to the <br />organization's growth plan.<br />
                        ● Website Frontend Developer with experience in Designing , Developing ,and implementing scalable<br />
                        and responsive enterprise level application with configurable approach , Creating common framework <br /> components for easy & quick development.</p>
                    <a href="https://shaikhejaz102.github.io/Page-transition/" className="stretched-link">Quick Intro</a>
                </div>
            </div> */}



            {/* {Card section} */}

            {/* <div className="container  d-flex justify-content-center" style={myStyle}>


                <div className="card mx-3" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">HTML</h5>
                        <p className="card-text">We are responsible for the complete end-to-end coding of websites.Direct HTML projects, develop web applications, code sites, and provide support to website users! HTMl - is the code that is used to structure a web page and its content!</p>
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={image1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <p className="card-text">Specializes in CSS, taking .psd files and mockups and writing the CSS code that incorporates all of the colors, padding, margins,borders , Fonts-styling , Flex, Grid ,animations , transitions  and more that comprise those designs!</p>
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={image2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">JavaScript</h5>
                        <p className="card-text">Write, modify, and debug web applications using Node.js, JavaScript, HTML, and CSS Design,code, and manage automated test scripts, continuous builds, and deployment Create modern and responsive layouts based on designs and messaging provided by the creative team Develop new features, enhance existing features, and implement bug fixes for code!</p>
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
                <div className="card mx-3" style={{ width: "18rem" }} data-aos="flip-left">
                    <img src={image3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">React Js</h5>
                        <p className="card-text">Mobile applications to branded React web solutions , We are with the requisite skills and competencies can carry out development while maintaining cost-efficiency!</p>
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div> */}

            {/** */}
            <main className='cardSection-main'>
                <div class="TopPara position-relative overflow-hidden p-3 p-md-5 text-center bg-body-tertiary">
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-3 fw-bold">Designed for features</h1>
                        <h3 class="fw-normal  mb-3" style={{ color: '#fff' }}>Build anything you want with Aperture</h3>
                        <div class="d-flex gap-3 justify-content-center lead fw-normal">
                            <a class="icon-link" href="#">
                                Learn more
                                {/* <svg class="bi"><use href="#chevron-right"></use></svg> */}
                            </a>
                            <a class="icon-link" href="#">
                                Buy
                                {/* <svg class="bi"><use href="#chevron-right"></use></svg> */}
                            </a>
                        </div>
                    </div>
                    {/* <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
                </div>


                {/** */}

                <div class="row mb-2" style={{ marginTop: "10vh" }}>
                    <div class="col-md-6">
                        <div class="para1 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class=" col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">Web</strong>
                                <h3 class="mb-0">Frontend Developer</h3>
                                <div class="mb-1 text-body-secondary">Nov 4</div>
                                <p class="card-text mb-auto">We creates websites and web applications.Strategic web experience Software development, Website development</p>
                                <a style={{cursor:'pointer'}} onClick={Resume} class="icon-link gap-1 icon-link-hover stretched-link">
                                    {/* Let's Build */}
                                    Download resume
                                    {/* <svg class="bi"><use xlink href="#chevron-right"></use></svg> */}
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                <img style={{ width: '23vw' }} src={frontend} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="para1 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class=" col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                                <h3 class="mb-0">Website Designer</h3>
                                <div class="mb-1 text-body-secondary">Nov 11</div>
                                <p class="mb-auto">Design a Professional Website Effortlessly with us Designer-Made results. Start Now! an impressive Website With Shaikh & Grow Online With Powerful SEO & Marketing Tools.</p>
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue
                                    {/* <svg class="bi"><use xlink href="#chevron-right"></use></svg> */}
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                <img style={{ width: '20vw' }} src={designer} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div class="col-md-8" style={{overflow:'hidden'}}>
                        <h3 style={{ paddingLeft: '10px' }} class="pb-4 mb-4 fst-italic border-bottom">
                            From the Experience
                        </h3>

                        <article class="Blogback blog-post">
                            {/* <h2 class="display-5 link-body-emphasis mb-1">Sample blog post</h2>
                            <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                            <hr />
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h2>Blockquotes</h2>
                            <p>This is an example blockquote in action:</p>
                            <blockquote class="blockquote">
                                <p>Quoted text goes here.</p>
                            </blockquote>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Example lists</h3>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
                            <ul>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ul>
                            <p>And this is an ordered list:</p>
                            <ol>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ol>
                            <p>And this is a definition list:</p>
                            <dl>
                                <dt>HyperText Markup Language (HTML)</dt>
                                <dd>The language used to describe and define the content of a Web page</dd>
                                <dt>Cascading Style Sheets (CSS)</dt>
                                <dd>Used to describe the appearance of Web content</dd>
                                <dt>JavaScript (JS)</dt>
                                <dd>The programming language used to build advanced Web sites and applications</dd>
                            </dl>
                            <h2>Inline HTML elements</h2>
                            <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                            <ul>
                                <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                                <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                                <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                                <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                                <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                                <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
                            </ul>
                            <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                            <h2>Heading</h2>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Sub-heading</h3>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <pre><code>Example code block</code></pre>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                        </article>

                        <article class="blog-post">
                            <h2 class="display-5 link-body-emphasis mb-1">Another blog post</h2>
                            <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <blockquote>
                                <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
                            </blockquote>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Example table</h3>
                            <p>And don't forget about tables in these posts:</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Upvotes</th>
                                        <th>Downvotes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alice</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>Bob</td>
                                        <td>4</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Charlie</td>
                                        <td>7</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Totals</td>
                                        <td>21</td>
                                        <td>23</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p> */}

                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div class="col-lg-4 col-md-5 d-flex flex-column text-center text-md-center py-5">
                                    <h1 class="display-3 mt-auto mb-4" style={{ color: '#fff', fontWeight: 'bolder' }}>Designs</h1>
                                    <p class="lead text-light opacity-70 pb-5 mb-0 mb-md-3">Multipurpose Business  <br class="d-none d-md-inline" /> Technology Template</p>
                                    <button type="button" class="btn btn-outline-light btn-lg px-4" fdprocessedid="y37nk" style={{ width: '100%' }}>Suscribe</button>
                                    <div>
                                        {/* <span>
                                        Quickly design and customize responsive mobile-first sites with us, the world’s most popular front-end,
                                         featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                        </span> */}
                                    </div>

                                </div>

                                <div class="d-flex flex-shrink-0 align-items-start">
                                    <img src={img1} class="rellax d-block flex-shrink-0 mt-n5" width="486" height="1390" alt="Screens" data-rellax-speed="4" data-disable-parallax-down="md" style={{ transform: "translate3d(0px, 0px, 0px)" }} />
                                    <img src={img2} class="rellax d-block flex-shrink-0 mt-5" width="486" height="1470" alt="Screens" data-rellax-speed="-4" data-disable-parallax-down="md" style={{ transform: "translate3d(0px, 0px, 0px)" }} />
                                </div>
                            </div>

                            {/* <img src="assets/img/landing/intro/hero/screens02.png" class="rellax d-block flex-shrink-0 mt-5" width="486" height="1470" alt="Screens" data-rellax-speed="-4" data-disable-parallax-down="md" style="transform: translate3d(0px, 32px, 0px);"/> */}
                        </article>

                        <article class="blog-post">
                            <h2 class="display-5 link-body-emphasis mb-1" style={{fontWeight:'bolder'}}>Technology We Works!</h2>
                            <p class="blog-post-meta" style={{ paddingLeft: "10px" }}>Novmber 04, 2023 by <a href="#" style={{fontWeight:'bolder'}}>Shaikh Ejaz</a></p>

                            <p style={{ paddingLeft: "10px" }}>This is some additional information skills content. We are working on enhancing new skills , to Archives the better experience.</p>
                            <h6 style={{ paddingLeft: "10px" }}><b>Master in Technical Competency :</b></h6>
                            <ul className='ul-icons' style={{ paddingLeft: "10px" }}>
                                <li>
                                    <i class="devicon-html5-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-css3-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-javascript-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-bootstrap-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-github-original-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-react-original-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-redux-original colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-sass-original colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-less-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-npm-original-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-babel-plain"></i>
                                </li>
                                <li>
                                    <i class="devicon-git-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-tailwindcss-original-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-visualstudio-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-webpack-plain-wordmark colored"></i>
                                </li>
                            </ul>
                            <h6 style={{ paddingLeft: "10px" }}><b>Module Enhancing Technical Competency :</b></h6>
                            <ul className='ul-icons' style={{ paddingLeft: "10px" }}>
                                {/* <li>TypeScript</li> */}

                                <li>
                                    <i class="devicon-typescript-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-angularjs-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-csharp-line colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-rust-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-python-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-dot-net-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-mongodb-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-express-original colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-mysql-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-nextjs-original-wordmark colored"></i>
                                </li>
                                {/** */}
                                <li>
                                    <i class="devicon-typescript-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-angularjs-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-csharp-line colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-rust-plain colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-python-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-dot-net-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-mongodb-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-express-original colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-mysql-plain-wordmark colored"></i>
                                </li>
                                <li>
                                    <i class="devicon-nextjs-original-wordmark colored"></i>
                                </li>
                                {/* <li>Next Js</li>
                                <li>Angular</li>
                                <li>Node Js</li>
                                <li>Express Js</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li> */}
                            </ul>
                            <p style={{ paddingLeft: "10px" }}>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                        </article>

                        <nav class="blog-pagination" aria-label="Pagination" style={{ paddingLeft: "10px" }}>
                            <Link class="btn  rounded-pill " style={{ border: 'none' }} to="/botom">Lets Build</Link>
                            <Link class="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</Link>
                        </nav>

                    </div>


                    <div class="col-md-4">
                        <div class="position-sticky" style={{ top: "2rem", background:"#fff" }}>
                            <div class="p-4 mb-3 bg-body-tertiary rounded" style={{ boxShadow: "0 80px 89px 0 rgb(0 0 0 / 21%), 0 20px 50px 0 rgb(0 0 0 / 12%)" }}>
                                <h4 class="fst-italic">About me</h4>
                                <p class="mb-0">
                                    Website Frontend Developer with experience in Designing, Developing, and implementing scalable
                                    and responsive enterprise level application with configurable approach , Creating common framework
                                    components for easy & quick development.</p>
                            </div>

                            <div>
                                <h4 class="fst-italic">Recent posts</h4>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                                            <img src={picture} style={{ width: '30%' }} alt="" />
                                            <div class="col-lg-8">
                                                <h6 class="mb-0">Websites Developement!</h6>
                                                <small class="text-body-secondary">January 15, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                                            <img src={picture1} style={{ width: '30%' }} alt="" />
                                            <div class="col-lg-8">
                                                <h6 class="mb-0">Clean and resuable codes</h6>
                                                <small class="text-body-secondary">January 14, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            {/* <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                                            <img src={picture2} style={{ width: '30%' }} alt="" />
                                            <div class="col-lg-8">
                                                <h6 class="mb-0">Scalabe Mobile App Development!</h6>
                                                <small class="text-body-secondary">January 13, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="p-4">
                                <h4 class="fst-italic">Archives</h4>
                                <ol class="list-unstyled mb-0">
                                    <li><a href="#">March 2021</a></li>
                                    <li><a href="#">February 2021</a></li>
                                    <li><a href="#">January 2021</a></li>
                                    <li><a href="#">December 2020</a></li>
                                    <li><a href="#">November 2020</a></li>
                                    <li><a href="#">October 2020</a></li>
                                    <li><a href="#">September 2020</a></li>
                                    <li><a href="#">August 2020</a></li>
                                    <li><a href="#">July 2020</a></li>
                                    <li><a href="#">June 2020</a></li>
                                    <li><a href="#">May 2020</a></li>
                                    <li><a href="#">April 2020</a></li>
                                </ol>
                            </div>

                            <div class="p-4">
                                <h4 class="fst-italic">Elsewhere</h4>
                                <ol class="list-unstyled">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spacer layer2"></div>


            </main>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default card;