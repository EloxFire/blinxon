import React from 'react';
import '../../sass/sub/card.scss';

function PhotoCard(props){
  //Style Desktop
  let stylesLarge = {
    photoCard: {
      backgroundImage: `url(${require(`../../img/${props.image}.png`)})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '8px 0px 0px 8px',
      width: "100%",
      height: '100%',
      WebkitClipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100)",
      clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
    }
  }

  //Style Smartphone
  let styleThin = {
    photoCard: {
      backgroundImage: `url(${require(`../../img/${props.image}.png`)})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '8px 8px 0px 0px',
      height: '30vh',
      width: "100%",
      WebkitClipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
      clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
    }
  }

  //Inline media query react
  //https://gist.github.com/jurassix/e401b9556ab5ec1ad888
  let photoCardStyle = function(){
    if(window.innerWidth > 769){
      return stylesLarge;
    }else{
      return styleThin;
    }
  }

  return(
    <div  className="pres-card col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 m-2 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row p-0">
      <div style={photoCardStyle().photoCard}></div>
      <div className="m-1">
        <div>
          <h3>{props.name}</h3>
          <h6>{props.role}</h6>
        </div>
        <div style={{height:"80%",overflow:"auto"}} >
          <p className="card-text mb-3">{props.text}</p>
          <li><span>Âge :</span> {props.years} ans</li>
          <li><span>Ville :</span> {props.town == null && <span>Non spécifié</span>}{props.town}</li>
          <li><span>Passions :</span> {props.hobbies == null && <span>Non spécifié</span>}{props.hobbies}</li>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;
