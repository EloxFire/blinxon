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
          <Card name="Enzo Avagliano" teamPlace="Pilote" text="Etudiant en 2nd année de bachelor informatique à Ynov à Aix-en-Provence, passionné de l'espace et des étoiles, mais aussi fou amoureux de cette course qu'est le 4L Trophy." image="enzo" imageLg="enzoCard"/>
          {/*<Card name="Olivia Masson" teamPlace="Co-Pilote" text="Etudiante en Droit à la faculté d'Aix-en-Provence, scoute d'exception et à la recherche d'aventure, passionnée par le 4L Trophy depuis plus d'un an déjà." image="olivia"/>
          <Card name="Yolande, aka 'Yoyo'" teamPlace="La 4L" text="4L née il y a 31 ans, bolide de mère en fille et en excellent état pour son âge plutôt... avancé ! Elle nous emmène partout au quotidien, et nous emmènera jusqu'à Marrakech sans le moindre pépin ! (On l'éspère du moins)." image="Yolande"/>*/}
        </div>
      </div>
    )
  }
}

export default Crew;
