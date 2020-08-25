import React, { Component } from 'react';
import '../sass/styles.scss';

import Titles from './sub/Titles';
import PhotoCard from './sub/PhotoCard';

class Crew extends Component{
  render(){
    return(
      <div id="equipage" className="mt-2">
        <Titles title="L'équipage : Qui sommes nous ?"/>
        <div className="col-12 d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <PhotoCard name="Enzo Avagliano" role="Pilote" age="19" town="Saint Cannat" text="Etudiant en 2nd année de bachelor informatique à Ynov à Aix-en-Provence, passionné de l'espace et des étoiles, mais aussi fou amoureux de cette course qu'est le 4L Trophy." image="enzo.png"/>
          <PhotoCard name="Olivia Masson" role="Co-pilote" age="20" town="Trets" text="Etudiante en Droit à la faculté d'Aix-en-Provence, scoute d'exception et à la recherche d'aventure, passionnée par le 4L Trophy depuis plus d'un an déjà." image="olivia.png"/>
          <PhotoCard name="Yolande (Yoyo)" role="La 4L" age="31" text="Renault 4 d'éxception, née il y a 31 ans, bolide de mère en fille et en excellent état pour son âge plutôt... avancé ! Elle nous emmène partout au quotidien, et nous emmènera jusqu'à Marrakech sans le moindre pépin ! (On l'éspère du moins)." image="yolande.png"/>
        </div>
        <div className="container text-center">
          <p className="justify">Le 4L Trophy est pour nous une aventure humaine incroyable et qui nous passionne depuis des années. Nous n'avons qu'une hate : Être sur la ligne de départ !</p>
        </div>
      </div>
    )
  }
}

export default Crew;
