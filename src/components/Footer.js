import React from 'react'
// import video from "./video.mp4"

function Footer() {
    return (
        <>
            {/* <div>
                <video autoPlay loop muted playsInline>
                    <source  src={video} type='video/mp4'/>
                </video>
                </div> */}
                
                    <footer className="text-center bg" style={{ background: 'linear-gradient(45deg, #c4ff10, transparent)' }}>
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                            <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            <div>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="/" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/shaikh-ejaz-72b2b6247" className="me-4 text-reset">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/shaikhejaz102" className="me-4 text-reset">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </section>
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            <i className="fas fa-gem me-3"></i><b>Shaikh Ejaz</b>
                                        </h6>
                                        <p>
                                            <b>Don't Miss Out</b><br />
                                            Get in Touch Now
                                            Try Today! Make Buzz
                                        </p>
                                    </div>
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Products
                                        </h6>
                                        <p>
                                            <a href="/" className="text-reset">Angular</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">React</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">Vue</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">Laravel</a>
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="/" className="text-reset">Pricing</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">Settings</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">Orders</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">Help</a>
                                        </p>
                                    </div>
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p><i className="fas fa-home me-3"></i> Malegaon, 423203, india</p>
                                        <p>
                                            <i className="fas fa-envelope me-3"></i>
                                            shaikhejaz102@gmail.com
                                        </p>
                                        <p><i className="fas fa-phone me-3"></i> + 90 286 787 16</p>
                                        <p><i className="fas fa-print me-3"></i> + 96 654 862 52</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                            © 2023 Copyright :
                            <a className="text-reset fw-bold" href="https://Shaikhportfolio.com/"> Shaikhportfolio.com</a>
                        </div>
                        
                    </footer>
        </>
    );
}

export default Footer;