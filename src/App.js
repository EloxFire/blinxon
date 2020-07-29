import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Crew from './assets/components/Crew';
import Raid from './assets/components/Raid';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}
        <Navbar/>

        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Home/>
              <Crew/>
              <Raid/>
            </div>
          }/>

          <Route path="/home" component={props =>
            <div>
              <Home/>
              <Crew/>
              <Raid/>
            </div>
          }/>

          <Route path="/equipage" component={props =>
            <div>
              <Crew/>
            </div>
          }/>

          <Route path="/raid" component={props =>
            <div>
            </div>
          }/>

          <Route path="/enfantsdudesert" component={props =>
            <div>
            </div>
          }/>

          <Route path="/nousaider" component={props =>
            <div>
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  )
}

export default App;
