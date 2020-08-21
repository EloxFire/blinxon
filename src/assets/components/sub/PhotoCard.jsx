import React from 'react';

function PhotoCard(props){
  //Style Desktop
  let stylesLarge = {
    photoCard: {
      borderRadius: "10px",
      border: "solid 3px #e64c3c",
      height: "55vh",
    },

    imageCard: {
      height: "100%",
      width: "40%",
      backgroundColor: "#e64c3c",
      backgroundImage: `url(${require(`../../img/${props.image}`)})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "8px 0 8px 0",
      WebkitClipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
      clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
    },

    textCard: {
      maxWidth: "60%",
    },

    titleCard: {
      fontFamily: "Osaka Chips",
      fontWeight: "normal",
    }
  }

  //Style Smartphone
  let styleThin = {
    photoCard: {
      borderRadius: "10px",
      border: "solid 3px #e64c3c",
      height: "70vh",
    },

    imageCard: {
      width: "100%",
      height:"25%",
      backgroundColor: "red",
      backgroundImage: `url(${require(`../../img/${props.image}`)})`,
      backgroundPosition: "center",
      backgroundSize: `${props.clip}`,
      borderRadius: "8px 8px 0px 0",
      WebkitClipPath: "polygon(0 0, 100% 0%, 100% 75%, 0% 100%)",
      clipPath: "polygon(0 0, 100% 0%, 100% 75%, 0% 100%)",
    },

    textCard: {
      maxHeight: "60%",
    },

    titleCard: {
      fontFamily: "Osaka Chips",
      fontWeight: "normal",
    }
  }

  //Inline media query react
  //https://gist.github.com/jurassix/e401b9556ab5ec1ad888
  let photoCardStyle = function(){
    if(window.innerWidth >= 769){
      return stylesLarge;
    }else{
      return styleThin;
    }
  }

  return(
    <div style={photoCardStyle().photoCard} className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 m-3 d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-column p-0">
      <div className="d-flex flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row">
        <div style={photoCardStyle().imageCard}></div>
        <div style={photoCardStyle().textCard}>
          <div className="headerCard col-12">
            <h1 style={photoCardStyle().titleCard} className="m-0 p-0">{props.title}</h1>
            <p style={photoCardStyle().subtitleCard}><span className="m-0 p-0">{props.subtitle}</span></p>
            <hr className="m-1" style={{width:"60%"}}/>
          </div>
          <div style={{maxHeight:"50%", overflow:"auto"}}>
            <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum aperiam similique nulla, repellat cum sequi nihil id officiis quas nobis eos voluptates. Non expedita commodi modi, vel vero eius.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum aperiam similique nulla, repellat cum sequi nihil id officiis quas nobis eos voluptates. Non expedita commodi modi, vel vero eius.</p>
          </div>
          <hr className="mt-3" style={{width:"60%"}}/>
        </div>
      </div>
      <div className="footerCard d-flex flex-wrap justify-content-center align-items-center">
        <h6>Quelques informations :</h6>
        <div className="d-flex flex-wrap justify-content-center">
          {props.age == null ? null : <li className="m-1"><span>Âge : </span>{props.age} ans</li>}
          {props.town == null ? null : <li className="m-1"><span>Ville : </span>{props.town}</li>}
          {props.hobbies == null ? null : <li className="m-1"><span>Passions : </span>{props.hobbies}</li>}
          {props.year == null ? null : <li className="m-1"><span>Mise en circulation : </span>Juillet 1989</li>}
          {props.horsepower == null ? null : <li className="m-1"><span>Puissance : </span>34ch</li>}
          {props.motor == null ? null : <li className="m-1"><span>Motorisation : </span>Moteur Cléon 956cm³</li>}
          {props.weight == null ? null : <li className="m-1"><span>Poids : </span>695Kg, une légèreté inégalé !</li>}
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;
