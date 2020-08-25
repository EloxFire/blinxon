import React from 'react';

function PhotoCard(props){
  //Style Desktop
  let stylesLarge = {
    photoCard: {
      borderRadius: "10px",
      border: "solid 3px #e64c3c",
      height: "70vh",
    },
    imageDiv: {
      height: "50%",
      backgroundImage: `url(${require(`../../img/team/${props.image}`)})`,
      backgroudPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "8px 8px 0 0",
      padding: "0",
      margin: "0",
    },
  }

  //Style Smartphone
  let styleThin = {
    photoCard: {
      borderRadius: "10px",
      border: "solid 3px #e64c3c",
      height: "70vh",
    },
    imageDiv: {
      height: "40%",
      backgroundImage: `url(${require(`../../img/team/${props.image}`)})`,
      backgroudPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: "8px 8px 0 0",
      padding: "0",
      margin: "0",
    },
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
    <div style={photoCardStyle().photoCard} className="col-12 col-lg-3 m-3 d-flex flex-column p-0">
      <div style={photoCardStyle().imageDiv}></div>
      <div className="p-3">
        <h5>{props.name}</h5>
        <p className="mt-n2 mb-n2">{props.role == null ? null : <span style={{fontWeight:"normal"}}>{props.role} - </span>}{props.age == null ? null : <span style={{fontWeight:"normal"}}>{props.age} ans - </span>}{props.town == null ? null : <span style={{fontWeight:"normal"}}>{props.town}</span>}</p>
        <hr/>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default PhotoCard;
