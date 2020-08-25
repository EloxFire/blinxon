import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Crew from './assets/components/Crew';
import Raid from './assets/components/Raid';
import Edd from './assets/components/Edd';
import Help from './assets/components/Help';
import Social from './assets/components/Social';
import Footer from './assets/components/Footer';

function App() {
  return(
    <Router>
      <div>
        <Navbar/>
        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Home/>
              <Crew/>
              <Raid/>
              <Edd/>
              <Help/>
              <Social/>
            </div>
          }/>

          <Route path="/home" component={props =>
            <div>
              <Home/>
              <Crew/>
              <Raid/>
              <Edd/>
              <Help/>
              <Social/>
            </div>
          }/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
