import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Map from './components/Map';
import Stats from './components/Stats';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class Main extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/map" component={Map}/>
             <Route path="/stats" component={Stats}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default Main;