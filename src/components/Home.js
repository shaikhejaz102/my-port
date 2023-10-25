import React, { useEffect, useRef } from 'react'
import image3 from './Ejaz1.jpg'
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



function Home(props) {

    const myStyle = {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    const homeCard = {
        display: 'flex',
        justifyContent: 'center',
    }

    const subscribe = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }

    // {buttons for Linkedin or Resume}

    function Resume(value) {
        // console.log("Resume has to be download");
        if (value) {
            window.open("https://drive.google.com/file/d/18qFxeQSppTsJMo-63MtZ3EEILl502Nko/view?usp=drivesdk", '_target');
        }
        else {
            console.log(`You have'nt select!`);
        }
    }

    function Linked(value1) {
        // console.log("hello");
        if (value1) {
            window.open("https://www.linkedin.com/in/shaikh-ejaz-72b2b6247", "_target");
        }
        else {
            console.log("Sorry to Server facing Some issue!");
        }
    }

    //typed js animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Front-end Developer</i>', 'ReactJs Developer', 'Responsive Web Designer', 'Web developer.'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    //AOS animation
    AOS.init();

    return (
        <>

            <div className="home my-3 d-flex justify-content-between" style={{ height: "82vh" }}>
                <div style={myStyle}>
                    <div className="fisrt" style={{ left: '60px', position: 'relative' }}>
                        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}><b>Hey My Name Is </b><span style={{ color: 'Blue' }}><b>Shaikh Ejaz</b></span></h2>
                        <h3><span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>I'm Passionate </span> <span ref={el} style={{ color: 'Blue' }}></span></h3>
                        <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}></h5>
                        <div className="btn my-2">
                            <button type="button" className="btn btn-dark" onClick={Resume}>Download Resume</button>
                            <button type="button" className="btn btn-dark my-2" onClick={Linked} style={{ marginLeft: '10px' }}>Linkedin</button>
                        </div>
                    </div>
                </div>
                <div className="second" style={myStyle}>
                    <img src={image3} style={{ width: '50%', borderRadius: '20px', position: "relative", right: '100px', transition: 'transition: .5s ease;'}} alt="" />
                </div>
            </div>

            <div className="two container" style={{ marginTop: '100px', height: '90vh' }}>
                <div className="container d-flex justify-content-between">
                    <h1><span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Find a plan that fits your goals</span></h1>
                    <span style={{ marginTop: '30px' }}><span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>3 articles</span></span>
                </div>
                <hr className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} />
                <div className="container" style={homeCard}>
                    <div className="card border-dark mb-3 my-3 mx-3" data-aos="fade-left">
                        <div className="card-header"><b>Learn to Code With Shaikh</b><br />Beginner</div>
                        <div className="card-body">
                            <h5 className="card-title">Learning Tips</h5>
                            <p className="card-text">Want to learn how to get started with programming in an interactive way? Try our drag and drop code lessons, sources and materials!</p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3 my-3 mx-3" data-aos="fade-up">
                        <div className="card-header"><b>Choosing a Programming Language</b><br />Beginner</div>
                        <div className="card-body">
                            <h5 className="card-title">Get Inspired</h5>
                            <p className="card-text">This syllabus will introduce learners to factors to consider when picking a first language as well as describe some popular options.</p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3 my-3 mx-3" data-aos="fade-right">
                        <div className="card-header"><b>Choosing a Career in Tech</b><br />Beginner</div>
                        <div className="card-body">
                            <h5 className="card-title">Career Advice</h5>
                            <p className="card-text">Are you feeling confused about where to aim for with your career goals? Take this decision to learn about different career options!</p>
                        </div>
                    </div>
                </div>

                <div className="Email container" >
                    <h2 style={{ fontSize: '2.5rem' }}>Subscribe for Innovation, Creative Design, Development and more...</h2>
                    <div className="container" style={subscribe}>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" style={{ padding: '1rem 5.75rem' }} id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">youremail@your.com</label>
                        </div>
                        <button type="button" className="btn btn-outline-primary" style={{ marginLeft: '10px' }}>Subscribe</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Home;
