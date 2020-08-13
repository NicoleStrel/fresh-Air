import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Map from './components/Map';
import Stats from './components/Stats';
import Error from './components/Error';

 
class Main extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default Main;
/*<Route path="/map" component={Map}/>
             <Route path="/stats" component={Stats}/>*/
             /*<Navigation />
             <Route path="/map" component={Map}/>
             */