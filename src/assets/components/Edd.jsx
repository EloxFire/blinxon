import React, { Component } from 'react';
import '../sass/styles.scss';

import Titles from './sub/Titles';
import logoEnfantsDuDesert from '../img/logos/logo-edd.png';
import eddCompo from '../img/edd/edd-compo.png';


class Edd extends Component{
  render(){
    return(
      <div id="enfantsdudesert" className="mt-5">
        <Titles title="L'association 'Enfants du désert'"/>

        <div className="col-12 d-flex flex-column align-items-center">
          <div className="col-10">
            <p className="justify">L’association Enfants du Désert existe depuis 2005. Elle a vu le jour suite à un voyage sur les terres marocaines qui a encouragé Laetitia et Emmanuel Chevallier à s’engager pour une cause qui porte sens : <span style={{fontWeight:"400"}}>l’accès à l’éducation des enfants du sud marocain</span>.</p>

            <div className="d-flex flex-column flex-lg-row">
              <div className="col-12 col-lg-7">
                <h5 className="mt-5">Quel est le but d'Enfants du désert ?</h5>
                <p>L'objectif principal de l'association est l'accès à l'éducation mais pour que cet accès soit optimal, Enfants du désert à étendu ses actions sur les conditions de santé et de vie générale. L'association apporte aussi un soutien aux femmes du désert dans le besoin.</p>

                <h5 className="mt-5">Comment ?</h5>
                <p>Enfants du désert possède un grand nobre de partenaires (dont Désertours et le 4L Trophy, lors duquel une partie des frais d'inscription des équipages est reversée à l'association), mais surtout grâce au dons de particuliers.</p>

                <h5 className="mt-5">Enfants du Désert en image :</h5>
                <div className="col-12 text-center"><img style={{maxWidth:"90%"}} src={eddCompo} alt="Images de l'association Enfants du désert"/></div>
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <img className="logo" src={logoEnfantsDuDesert} alt="Logo de l'association Enfants du désert"/>
                <p className="text-center">Logo de l'association Enfants du désert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Edd;
