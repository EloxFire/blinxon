import React, { Component } from 'react';
import '../sass/nav.scss';

import blinxonLogo from '../img/LOGO-BLINXON.png';
import burgerMenuIcon from '../img/burgerMenuIcon.svg'

import Timer from "./sub/Timer";

class Navbar extends Component{
  render(){
    return(
      <div className="navbarBody col-12 d-flex flex-column align-items-center sticky-top">
        <div className="col-12 d-none d-xs-none d-sm-none d-md-flex d-lg-flex flex-row align-items-center">
          <div className="col-5 d-flex justify-content-start">
            <li className="nav-item">
              <a className="nav-link" href="#">L'équipage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Le Raid</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nous aider
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Sponsoring</a>
                <a className="dropdown-item" href="#">Don financier</a>
                <a className="dropdown-item" href="#">Don en nature</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nos réseaux</a>
            </li>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <img className="navbarLogo" src={blinxonLogo} alt="Blinxon's logo"/>
          </div>
          <div className="col-5 d-flex justify-content-end align-items-center">
            <Timer/>
          </div>
        </div>

        <div className="col-12 d-flex d-xs-flex d-sm-flex d-md-none d-lg-none flex-row">
          <div className="dropdown col-12 ml-n4 d-flex align-items-center">
            <img className="navbarLogo" src={blinxonLogo} alt="Blinxon's logo"/>
            <button className="btn dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="navbarLogo" src={burgerMenuIcon} alt="Burger menu icon"/>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li className="nav-item">
                <a className="nav-link" href="#">L'équipage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Le Raid</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Nous aider</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sponsoring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Don en nature</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Don financier</a>
              </li>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Navbar;
