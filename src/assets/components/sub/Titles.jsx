import React from 'react';
import '../../sass/sub/titles.scss';

function Titles(props){
  const titleStyleCard = {
    maxHeight: '7vh',
  }

  const titleStyleText = {
    textTransform: 'uppercase',
    fontFamily: "Osaka Chips",
    fontSize: ''
  }

  return(
    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-row justify-content-center">
      <div style={titleStyleCard} className="card p-2">
        <p style={titleStyleText}>{props.title}</p>
      </div>
    </div>
  )
}

export default Titles;
