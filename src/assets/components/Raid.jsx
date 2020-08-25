import React, { Component } from 'react';

import Titles from './sub/Titles';
import PhotoCard from './sub/PhotoCard';
import logo4ltrophy from '../img/logos/logo-4l-trophy.png';
import raidCompo from '../img/raid/raid-image-compo.png';


class Raid extends Component{
  render(){
    return(
      <div id="raid" className="mt-5">
        <Titles title="Le raid 4L Trophy : C'est quoi ?"/>

        <div className="col-12 d-flex flex-column align-items-center">
          <div className="col-10">
            <p className="justify">Le 4L Trophy est un rallye-raid automobile solidaire créé par Jean-Jaques Rey, destiné aux jeunes de 18 à 28 ans qui prennent la route depuis Biarritz en direction de Marrakech au Marroc, à bord de la seule voiture autorisée : <span style={{fontWeight:"400"}}>La mythique Renault 4</span> !</p>

            <div className="d-flex flex-column flex-lg-row">
              <div className="col-12 col-lg-7">
                <h5 className="mt-5">Quel est le but de ce trophy ?</h5>
                <p>Le 4L Trophy à un but solidaire unique : <span style={{fontWeight:"400"}}>Venir en aide aux enfants et familles défavorisées du désert marocain</span>.</p>

                <h5 className="mt-5">Comment ?</h5>
                <p>Cela est possible grâce aux participants du raid (appelés les 'Trophysites'). L'inscription au raid est payante, une grande partie des frais d'inscriptions que paient les participants est reversée à l'association 'Enfants du Désert', qui est l'association partenaire du raid depuis 2005.</p>

                <h5 className="mt-5">Le raid en image :</h5>
                <div className="col-12 text-center"><img style={{maxWidth:"90%"}} src={raidCompo} alt="Images du 4L trophy"/></div>
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <img className="logo" src={logo4ltrophy} alt="Logo du 4L Trophy"/>
                <p className="text-center">Logo du 4L Trophy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Raid;
