import React from 'react';
import '../../sass/sub/titles.scss';

function Titles(props){
  return(
    <div className="col-12 mt-5">
      <div className="col-7 col-xs-7 col-sm-7 col-md-7 col-lg-2 title-box text-center pt-1">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  )
}

export default Titles;
