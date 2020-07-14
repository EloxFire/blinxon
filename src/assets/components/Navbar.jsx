import React, { Component } from 'react';

import '../sass/nav.scss';

import blinxonLogo from '../img/LOGO-BLINXON.png';
import burgerMenuIcon from '../img/burgerMenuIcon.svg'

import Timer from "./sub/Timer";

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg sticky-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={blinxonLogo} width="50" height="50" className="d-inline-block align-top" alt="Blinxon's Logo"/>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">L'équipage <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">Le raid</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">Enfants du désert</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">Nous aider</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="#">Nos réseaux</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar;
