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
          <PhotoCard name="Enzo Avagliano" role="Pilote" text="Etudiant en 2nd année de bachelor informatique sur le campus Ynov à Aix en Provence, passionné de l'espace et des étoiles, mais aussi fou amoureux de cette course qu'est le 4L Trophy." image="enzo" years="19" town="Saint Cannat (13)" hobbies="Espace, informatique, voyages"/>
          <PhotoCard name="Olivia Masson" role="Co-Pilote" text="Etudiante en Droit à la faculté d'Aix-en-Provence, scoute d'exception et à la recherche d'aventure, passionnée par le 4L Trophy depuis plus d'un an déjà." image="olivia" years="20" town="Trets (13)" hobbies="Voyages, Harry Potter"/>
          <PhotoCard name="Yolande, aka 'Yoyo'" role="La 4L" text="4L née il y a 31 ans, bolide de mère en fille et en excellent état pour son âge plutôt... avancé ! Elle nous emmène partout au quotidien, et nous emmènera jusqu'à Marrakech sans le moindre pépin ! (On l'éspère du moins)." image="Yolande" years="31"/>
        </div>
      </div>
    )
  }
}

export default Crew;
