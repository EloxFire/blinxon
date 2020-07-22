import React, { Component } from 'react';
import '../sass/crew.scss';

import Titles from './sub/Titles';
import Card from './sub/Card';

class Crew extends Component{
  render(){
    return(
      <div id="crew" className="">
        <Titles title="L'équipage"/>
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <Card name="Enzo Avagliano" teamPlace="Pilote" text="Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet" image="enzo"/>
          <Card name="Olivia Masson" teamPlace="Co-Pilote" text="Lorem ipsum dolor sit amet, consectet" image="olivia"/>
          <Card name="Yolande, aka 'Yoyo'" teamPlace="La 4L" text="Lorem ipsum dolor sit amet, consectet" image="Yolande"/>
        </div>
      </div>
    )
  }
}

export default Crew;
