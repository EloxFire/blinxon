import React, { Component } from 'react';
import '../sass/home.scss';

import Timer from './sub/Timer';
import Button from './sub/Button';
import blinxonTitle from '../img/blinxonTitle.png';

class Home extends Component{
  render(){
    return(
      <div id="home" className="d-flex flex-column flex-sx-column flex-sm-column flex-md-column flex-lg-row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-7 d-flex flex-column align-items-center">
          <h4 className="osaka beige mt-5">Bienvenue sur notre site</h4>
          <img className="blinxonImageTitle" src={blinxonTitle} alt="Blinxon's logo lettered"/>

          <div className="h-25 row align-items-center">
            <div className="d-flex d-xs-flex d-sm-flex d-md-flex d-lg-none flex-column justify-content-center align-items-center text-center">
              <h4 className="beige osaka">Départ du 4L Trophy 2021 dans :</h4>
              <Timer font="2.5em" color="black"/>
            </div>

            <div className="d-none d-xs-none d-sm-none d-md-none d-lg-flex flex-column justify-content-center align-items-center text-center">
              <h4 className="beige osaka">Départ du 4L Trophy 2021 dans :</h4>
              <Timer font="4em" color="white"/>
            </div>
          </div>

          <div className="h-25 row align-items-center mt-5">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
              <Button title="Qui sommes nous ?" to="#equipage"/>
              <Button title="Le raid 4L Trophy" to="#raid"/>
              <Button title="Association 'Enfants du désert'" to="#enfantsdudesert"/>
              <Button title="Comment nous aider ?" to="#nousaider"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
