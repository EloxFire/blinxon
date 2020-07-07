import React, { Component } from 'react';
import '../sass/nav.scss';

import blinxonLogo from '../img/LOGO-BLINXON.png';

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="https://getbootstrap.com/docs/4.5/components/navbar/?">
          <img src={blinxonLogo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
          Blinxon
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://getbootstrap.com/docs/4.5/components/navbar/?">Accueil <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://getbootstrap.com/docs/4.5/components/navbar/?">L'équipage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://getbootstrap.com/docs/4.5/components/navbar/?">Le 4L Trophy</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://getbootstrap.com/docs/4.5/components/navbar/?" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nous aider
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.5/components/navbar/?">Don en nature</a>
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.5/components/navbar/?">Sponsoring</a>
                <a className="dropdown-item" href="https://getbootstrap.com/docs/4.5/components/navbar/?">Don financier</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar;
