import React from 'react';
import '../../sass/sub/titles.scss';

function Titles(props){
  const titleStyleText = {
    textTransform: 'uppercase',
    fontSize: '3em'
  }

  let surlignageLarge = {
    title: {
      backgroundColor: "#e64c3c",
      padding: "10px 15px 10px 15px",
      borderRadius: "10px",
      fontFamily: "Osaka Chips",
      color: "#fff",
      fontWeight: "normal",
    }
  }

  let surlignageThin = {
    title: {
      backgroundColor: "#e64c3c",
      padding: "10px 15px 10px 15px",
      borderRadius: "10px",
      fontFamily: "Osaka Chips",
      color: "#fff",
      fontWeight: "normal",
      fontSize: ".5em"
    }
  }

  let surlignage = function(){
    if(window.innerWidth > 769){
      return surlignageLarge;
    }else{
      return surlignageThin;
    }
  }

  return(
    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-row justify-content-center">
      <p style={titleStyleText} className="mt-3 mb-3"><span style={surlignage().title}>{props.title}</span></p>
    </div>
  )
}

export default Titles;
