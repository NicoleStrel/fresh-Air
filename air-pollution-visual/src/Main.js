import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import CountryPage from './components/CountryPage';
import Error from './components/Error';
import generateDataList from './components/readData';
 
const countryTags =['AUS', 'AUT', 'BEL', 'CAN', 'CHE', 'CRI', 'CZE', 'DEU', 'DNK', 'EST', 'FIN', 'GBR', 'GRC', 'HUN', 'IRL', 'ISL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NOR', 'NZL', 'POL', 'PRT', 'RUS', 'SVK', 'SVN', 'SWE', 'TUR', 'USA', 'FRA', 'ESP', 'CHL'];
var year="2016";
var data=generateDataList(year, countryTags);

class Main extends Component {

  generateCountryRoutes(){
    return countryTags.map((country) =>{
      let path="/"+country;
      var datacountry = data.filter(d => d.cou === country)[0];
      return <Route path={path} key={country} render={routeProps => <CountryPage {...routeProps} cou={country} year={year} data={ datacountry}/>} />
    })   
  }
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route path="/" render={routeProps => <Home {...routeProps} couTags={countryTags} year={year} data={data}/>} exact/>
            {this.generateCountryRoutes()}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default Main;
