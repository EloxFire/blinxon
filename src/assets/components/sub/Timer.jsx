import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

import '../../sass/sub/timer.scss';

const Completionist = () => <span>L'aventure démarre !</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return(
      <div className="d-flex flex-row countdown-container">
        <p className="timer-text mr-2">Départ dans</p>
        <div className="timer-container mr-2 d-flex flex-row align-items-center justify-content-center">
          <p className="timer-text">{days}</p><span className="timer-span">Jours</span>
        </div>
        <div className="timer-container mr-2 d-flex flex-row align-items-center justify-content-center">
          <p className="timer-text">{hours}</p><span className="timer-span">Heures</span>
        </div>
        <div className="timer-container mr-2 d-flex flex-row align-items-center justify-content-center">
          <p className="timer-text">{minutes}</p><span className="timer-span">Minutes</span>
        </div>
        <div className="timer-container mr-2 d-flex flex-row align-items-center justify-content-center">
          <p className="timer-text">{seconds}</p><span className="timer-span">Secondes</span>
        </div>
      </div>
    )
  }
};

class Timer extends Component{
  render(){
    return(
      <Countdown date={new Date("2021-02-18")} renderer={renderer}/>
    )
  }
}

export default Timer;
