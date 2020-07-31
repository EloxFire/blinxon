import React, { Component } from 'react';
import '../sass/crew.scss';

import Titles from './sub/Titles';
import PhotoCard from './sub/PhotoCard';

class Crew extends Component{
  render(){
    return(
      <div id="equipage" className="mt-2">
        <Titles title="L'équipage : Qui sommes nous ?"/>
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <PhotoCard title="Enzo Avagliano" subtitle="Pilote" image="enzo.png" clip="cover"/>
          <PhotoCard title="Olivia Masson" subtitle="Co-pilote" image="olivia.png" clip="cover"/>
        </div>
      </div>
    )
  }
}

export default Crew;
