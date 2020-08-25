import React, { Component } from 'react';
import '../sass/styles.scss';
import Titles from './sub/Titles';

import sponsorsList from '../img/help/sponsors-list.png';

class Help extends Component{
  render(){
    return(
      <div id="nousaider" className="mt-5">
        <Titles title="Comment nous aider ?"/>

        <div className="col-12 d-flex flex-column align-items-center">
          <div className="col-10">
            <p className="justify">La participation au 4L Trophy n'est pas une mince affaire. C'est une aventure incroyable qui demande des mois de préparation. Cette dernière peut s'avérer assez couteuse en énergie et surtout en argent.</p>

            <div className="d-flex flex-column flex-lg-row">
              <div className="col-12 col-lg-7">
                <h5 className="mt-5">Pourquoi nous aider ?</h5>
                <p>Si vous hésitez à nous aider, il est bon de savoir qu'aucun don n'est petit, qu'aucune aide n'est pas assez précieuse. C'est peut être l'occasion pour vous de participer à votre échelle à quelque chose de grand et avec des résultats concrets.</p>

                <h5 className="mt-5">Comment nous aider ?</h5>
                <p>Vous pouvez nous aider de différentes façons, dépendants de la manière dont vous vous présentez :</p>
                <div className="p-3 d-flex flex-column">
                  <h6 className="mt-3">Vous êtes un particulier ?</h6>
                  <p>Vous pouvez nous aider en :</p>
                  <ul>
                    <li><span style={{fontWeight:"400"}}>Nous suivant</span> sur nos <a href="#nosresaux">réseaux sociaux</a>.</li>
                    <li><span style={{fontWeight:"400"}}>Faisant un don en nature</span> pour notre association (Don de matériel automobile, scolaire, etc..;)</li>
                    <li><span style={{fontWeight:"400"}}>Faisant un don</span> sur notre cagnotte <a href="https://www.leetchi.com/c/blinxon-4l-trophy" target="_blank" rel="noopener noreferrer">Leetchi</a>.</li>
                  </ul>
                  <h6 className="mt-3">Vous êtes une entreprise ?</h6>
                  <p>Vous pouvez nous aider en :</p>
                  <ul>
                    <li><span style={{fontWeight:"400"}}>Faisant un don en nature</span> pour notre association (Don de matériel automobile, scolaire, etc..;)</li>
                    <li><span style={{fontWeight:"400"}}>Sponsorisant</span> notre équipage (Voir dossier de sponsoring disponible dans la section 'Nos réseaux')</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-center">Ils nous soutiennent déjà :</h5>
                <img style={{maxHeight:"65vh"}} src={sponsorsList} alt="Liste des sponsors de Blinxon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Help;
