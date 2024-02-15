import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.textHome}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.forAbout}</Link>
          </li>
  
  
         
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className="color-btns d-flex">
             <div className="tsxt">Choose Background</div>
            <button className="color1 m-2" onClick={props.background1}></button>
            <button className="color2 m-2" onClick={props.background2}></button>
            <button className="color3 m-2" onClick={props.background3}></button>
        </div>
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.touch}</label>
</div>
  </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  forAbout : PropTypes.string.isRequired
}