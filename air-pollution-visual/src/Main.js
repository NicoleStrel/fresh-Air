import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import CountryPage from './components/CountryPage';
import Error from './components/Error';
import generateDataList from './components/readData';
 
const countryTags =['AUS', 'AUT', 'BEL', 'CAN', 'CHE', 'CRI', 'CZE', 'DEU', 'DNK', 'EST', 'FIN', 'GBR', 'GRC', 'HUN', 'IRL', 'ISL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NOR', 'NZL', 'POL', 'PRT', 'RUS', 'SVK', 'SVN', 'SWE', 'TUR', 'USA', 'FRA', 'ESP', 'CHL'];


class Main extends Component {
  state = { 
    year: '2017', //defaults to most recent year in the data set
    data: generateDataList('2017', countryTags),
  }
  

  increaseYear = () => {
    var nextyear=parseFloat(this.state.year) +1;
		this.setState(() => ({
      year: nextyear.toString(),
      data: generateDataList(nextyear.toString(), countryTags),
		}))
  }
  decreseYear = () => {
    var prevyear=parseFloat(this.state.year) -1;
		this.setState(() => ({
      year: prevyear.toString(),
      data: generateDataList(prevyear.toString(), countryTags),
		}))
	}

  generateCountryRoutes(){
    return countryTags.map((country) =>{
      let path="/"+country;
      var datacountry = this.state.data.filter(d => d.cou === country)[0];
      return <Route path={path} key={country} render={routeProps => <CountryPage {...routeProps} cou={country} year={this.state.year} data={ datacountry} increaseYear={this.increaseYear} decreseYear={this.decreseYear}/>} />
    })   
  }
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
            <Route path="/" render={routeProps => <Home {...routeProps} couTags={countryTags} year={this.state.year} data={this.state.data} increaseYear={this.increaseYear} decreseYear={this.decreseYear}/>} exact/>
            {this.generateCountryRoutes()}
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default Main;
