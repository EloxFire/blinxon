import React, { Component } from 'react';
import '../sass/styles.scss';
import Titles from './sub/Titles';
import dossierSponso from '../img/DOSSIERSPONSO.pdf';


let stylesLarge = {
  social: {
    border: "2px solid #e64c3c",
    borderRadius: "10px",
  }
}
let stylesThin = {
  social: {
    border: "2px solid #e64c3c",
    borderRadius: "10px",
  }
}

let styles = function(){
  if(window.innerWidth >= 769){
    return stylesLarge;
  }else{
    return stylesThin;
  }
}
class Social extends Component{
  render(){
    return(
      <div id="nosreseaux" className="mt-5 mb-5">
        <Titles title="Suivre notre aventure"/>
        <div className="col-12 d-flex flex-column align-items-center">
          <div className="col-10 text-center">
            <p className="justify">Si vous voulez en savoir plus sur notre préparation ou nous soutenir d'avantage, voici un catalogue de liens utiles ramenant vers nos différents réseaux sociaux ou encore contenant notre dossier de sponsoring en version PDF.</p>
          </div>
          <div style={styles().social} className="col-12 col-lg-7 p-3 mt-3">
            <div className="col-12 text-center"><h3>Restez connectés !</h3></div>
            <div className="col-12 mt-5">
              <h5>Réseaux sociaux :</h5>
              <div className="pb-3 pl-3">
                <p>Notre instagram : <a href="https://www.instagram.com/blinxon_4ltrophy/">@blinxon_4ltrophy</a></p>
                <p>Notre facebook : <a href="https://www.facebook.com/blinxon.trophy">Blinxon Trophy</a></p>
                <p>Notre Twitter : <a href="https://twitter.com/blinxon4l">@Blinxon4l</a></p>
                <hr/>
              </div>
              <h5 className="mt-3">Nous contacter :</h5>
              <div className="pb-3 pl-3">
                <p>Par mail : <a href="mailto:enzolivia4l@gmail.com">enzolivia4l@gmail.com</a></p>
                <p>Par téléphone (Pilote) : 06.69.07.42.59</p>
                <p>Par téléphone (Co-pilote) : 07.82.46.61.75</p>
                <hr/>
              </div>
              <h5 className="mt-3">Documents :</h5>
              <div className="pb-3 pl-3">
                <p>Dossier de sponsoring (PDF) : <a download href={dossierSponso}>Télécharger</a></p>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Social;
