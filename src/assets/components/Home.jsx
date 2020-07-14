import React, { Component } from 'react';
import '../sass/home.scss';

import Timer from './sub/Timer';

class Home extends Component{
  render(){
    return(
      <div id="home">
        <div className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
          <div className="home-part-top"></div>
          <div className="home-part-bottom p-2">
            <h4 className="blinxonSubtitle">Bienvenue sur notre site</h4>
            <h1 className="blinxonTitle">Blinxon</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
