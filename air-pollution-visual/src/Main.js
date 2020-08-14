import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import CountryPage from './components/CountryPage';
import Map from './components/Map';
import Error from './components/Error';

 
const countryTags =['AUS', 'AUT', 'BEL', 'CAN', 'CHE', 'CRI', 'CZE', 'DEU', 'DNK', 'EST', 'FIN', 'GBR', 'GRC', 'HUN', 'IRL', 'ISL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NOR', 'NZL', 'POL', 'PRT', 'RUS', 'SVK', 'SVN', 'SWE', 'TUR', 'USA', 'FRA', 'ESP', 'CHL']
class Main extends Component {

  generateCountryRoutes(){
    return countryTags.map((country) =>{
      let path="/"+country;
      return <Route path={path} render={routeProps => <CountryPage {...routeProps} cou={country}/>} />
    })   
  }
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route path="/" render={routeProps => <Home {...routeProps} couTags={countryTags}/>} exact/>
            {this.generateCountryRoutes()}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default Main;
