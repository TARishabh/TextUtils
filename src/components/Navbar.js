import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// #d1d174
// #1571f7'
export default function Navbar(props){

    let textColor;
    if (props.mode === 'pink') {
        textColor = 'black';
      } else if (props.mode === 'white') {
        textColor = 'black';
      } else {
        textColor = 'white';
      }
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
            {/* <nav className='navbar navbar-expand-lg navbar-light bg-light'> */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.AppName}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item customclass">
                            <Link style={{'color':props.mode === 'dark'?'white':'black'}}className="nav-link" to="/about/">About</Link>
                        </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            <div className="form-check form-switch my-3">
            <input onClick = {props.setmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label style={{'color':props.mode === 'dark'?'white':'black'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
            </div>
            <div className="form-check form-switch my-3">
            <input onClick = {props.artisticmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            {/* <label style={{'color':props.mode === 'pink'?'blue':'yellow'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Artistic Mode</label> */}
            {/* <label style={{'color':props.mode === 'pink'?'black': props.mode === 'white'?'black': 'white'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Artistic Mode</label> */}
            <label style={{'color':textColor}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Artistic Mode</label>
            </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    AppName:PropTypes.string
}

Navbar.defaultProps = {
    AppName:"TextUtils"
}