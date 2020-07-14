import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}
        <Route path="/(home)/" component={props =>
          <div>
          <Navbar/>
          <Home/>
          </div>
        }/>

        <Switch>
          {/*In routes*/}
          <Route path="/" exact component={props =>
            <div>
              <Navbar/>
              <Home/>
            </div>
          }/>

          <Route path="/home" component={props =>
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
