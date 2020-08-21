import React, { Component } from 'react';

import Titles from './sub/Titles';
import PhotoCard from './sub/PhotoCard';
import logo4ltrophy from '../img/logo-equipage.png';


const section = {
  height: "90vh",
}
const image = {
  backgroundImage: `url(${logo4ltrophy})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  height: '100%',
  width: '100%'
}

class Raid extends Component{
  render(){
    return(
      <div style={section} id="raid">
        <Titles title="Le raid 4L Trophy : C'est quoi ?"/>
        <div className="col-12">
          <div style={image} className="col-6"></div>
          <div className="col-6">
            ijho
          </div>
        </div>
      </div>
    )
  }
}

export default Raid;
