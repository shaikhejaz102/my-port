import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.png'
// import img1 from './icons8-github-50 copy.png'
// import img2 from './icons8-email-50.png'
// import img3 from './icons8-twitter-50.png'
import logo from "./Ejaz-removebg-preview.png"
import image3 from './Ejaz1.jpg'

const Navbar = (props) => {

  // const myNav = {
  // position: 'sticky',
  // width: '100%',
  // top: '0',
  //   backdropFilter: 'blur(20px)',
  //   background: '#00000014',
  //   zIndex: 1
  // }

  return (
    <>
      {/* <nav className="navbar bg-body-transparent fixed-top bg-body-${props.mode} bg-${props.mode}">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" style={{ marginRight: '-50px' }} to="/"><img src={logo} style={{ width: "18%" }} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: '#cdff64' }}><img src={logo} style={{width:'18%'}} alt="" /></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className={`nav-a active mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" style={{ textDecoration: 'none' }} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-a mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none' }} to="card/">About</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-a mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none' }} to="service/">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-a mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none' }} to="botom/">Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-a mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none' }} to="website/" >
                    Website
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-a mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textDecoration: 'none' }} to="smal/" >
                    Projects
                  </Link>
                </li>
              </ul> */}

      {/* <div className="social mx-3">
              <Link to="https://github.com/shaikhejaz102" className='mx-1 text-light'><img src={img1} style={{ width: '15%' }} alt="" /></Link>
              <Link to="mailto:shaikhejaz102@gmail.com" className='mx-1 text-light'><img src={img2} style={{ width: '15%' }} alt="" /></Link>
              <Link to="/" className='mx-1 text-light'><img src={img3} style={{ width: '15%' }} alt="" /></Link>
            </div> */}
      {/* <div className="form-check form-switch mx-2">
                <input className="form-check-input" style={{ cursor: 'pointer' }} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div> */}

      {/* <div>
                <Link className="btn btn-sm btn-outline rounded-pill" to="/">Sign up</Link>
                <Link className="link-secondary" to="/" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="navbar bg-body-transparent fixed-top bg-body-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" style={{ marginRight: '-50px' }} to="/"><img src={logo} style={{ width: "18%" }} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: '#cdff64' }}><img src={logo} style={{ width: '77%' }} alt="" /></h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body d-grid justify-content-center align-items-center justify-items-center">
              <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary justify-content-center align-items-center" style={{ width: "4.5rem" }}>
                <Link to="/" style={{textAlign:'center'}} className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                  {/* <svg className="bi pe-none" width="40" height="32"><use xlink to="#bootstrap"></use></svg> */}
                  <i className="fa-solid fa-house fa-bounce"></i>
                  {/* <span className="visually-hidden">Icon-only</span> */}
                </Link>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                  <li className="nav-item">
                    <Link to="card/" className="nav-link active py-3 border-bottom rounded-0 " aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
                      {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Home"><use xlink to="#home"></use></svg> */}
                      <i className="fa-solid fa-user fa-bounce" style={{color: "#000000"}}></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="service/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
                      {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard"><use xlink to="#speedometer2"></use></svg> */}
                      <i className="fa-solid fa-tv fa-bounce <i className=" style={{color: "#000000"}}></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="website/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
                      {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Orders"><use xlink to="#table"></use></svg> */}
                      <i className="fa-solid fa-diagram-project fa-bounce" style={{color: "#000000"}}></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="smal/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                      {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Products"><use xlink to="#grid"></use></svg> */}
                      <i className="fa-solid fa-bug fa-bounce" style={{color: "#000000"}}></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="botom/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                      {/* <svg className="bi pe- hcn,cuxknone" width="24" height="24" role="img" aria-label="Customers"><use xlink to="#people-circle"></use></svg> */}
                      <i className="fa-solid fa-handshake-angle fa-bounce" style={{color: "#000000"}}></i>
                    </Link>
                  </li>
                </ul>
                <div className="dropdown border-top">
                  <Link to="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={image3} style={{width: "2vw",zIndex: "2",position: "relative"}} alt=""  width="24" height="24" className="rounded-circle" />
                  </Link>
                  <ul className="dropdown-menu" > 
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <li>
                      <Link to="https://github.com/shaikhejaz102" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Customers"><use xlink to="#people-circle"></use></svg> */}
                        <i className="fa-brands fa-github fa-bounce"  style={{color: "#000000"}}></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Customers"><use xlink to="#people-circle"></use></svg> */}
                        <i className="fa-solid fa-gears fa-bounce"  style={{color: "#000000"}}></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Customers"><use xlink to="#people-circle"></use></svg> */}
                        <i className="fa-solid fa-power-off fa-bounce"style={{color: "#000000"}}></i>
                      </Link>
                    </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      {/* <div className="">
        <header  style={myNav} className="border-bottom">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link className="link-secondary" to="/"><img src={logo} style={{ width: "15%" }} alt="" /></Link>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav style={myNav} className="nav nav-underline justify-content-around">
            <div>
            <Link className="link-secondary" to="/"><img src={logo} style={{ width: "15%" }} alt="" /></Link>
              <Link className="blog-header-logo text-body-emphasis text-decoration-none" to="/"><b style={{ color: 'blue' }}>Shaikh Ejaz</b></Link>
            </div>
            <div className='d-flex justify-content-center'>
            <Link className="nav-item nav-link link-body-emphasis active mx-3" to="/">Home</Link>
            <Link className="nav-item nav-link link-body-emphasis mx-3" to="card/">About</Link>
            <Link className="nav-item nav-link link-body-emphasis mx-3" to="service/">Services</Link>
            <Link className="nav-item nav-link link-body-emphasis mx-3" to="botom/">Contacts</Link>
            <Link className="nav-item nav-link link-body-emphasis mx-3" to="website/">Websites</Link>
            <Link className="nav-item nav-link link-body-emphasis mx-3" to="smal/">Business</Link>
            </div>
          </nav>
        </div>
      </div> */}
    </>
  )
}

export default Navbar;