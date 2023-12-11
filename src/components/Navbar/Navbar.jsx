import React from 'react'
import './Navbar.css'

import logo from '../../assets/DCE-Logo.png'

const Navbar = (props) => {
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
          <div className="container-fluid">
              <a className="navbar-brand" onClick={() => scrollToSection(props.homeRef)}>
                  <img src={logo} alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center align-items-center">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" onClick={() => scrollToSection(props.homeRef)}><b style={{color:'#fff'}}>Home</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" onClick={() => scrollToSection(props.aboutRef)}><b style={{color:'#fff'}}>About</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" onClick={() => scrollToSection(props.scopeRef)}><b style={{color:'#fff'}}>Scope</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" onClick={() => scrollToSection(props.datesRef)}><b style={{color:'#fff'}}>Important Dates</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" onClick={() => scrollToSection(props.speakersRef)}><b style={{color:'#fff'}}>Speakers</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" onClick={() => scrollToSection(props.contactRef)}><b style={{ color: '#fff' }}>Contact</b></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link btn btn-outline-danger" href="/" target='_blank' type='button' style={{ color: "#fff", border: 'none' }}>Registration</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar