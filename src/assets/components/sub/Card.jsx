import React from 'react';
import '../../sass/sub/card.scss';

function Card(props){

  const presCardStyle = {
    backgroundImage: `url(${require(`../../img/${props.image}.png`)})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '8px 0px 0px 8px',
    height: '70vh',
    borderRight: '2px solid #e64c3c'
  }
  return(
    <div className="pres-card col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 m-2 d-flex flex-row p-0">
      <div style={presCardStyle} className="col-4 m-0"></div>
      <div className="col-8 body-card">
        <h3>{props.name}</h3>
        <h5>{props.teamPlace}</h5>
        <div style={{height: '20.5vh'}} className="overflow-auto">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
