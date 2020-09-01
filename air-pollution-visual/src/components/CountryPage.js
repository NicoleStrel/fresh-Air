
import React from 'react';
import Flag from 'react-world-flags';
import { NavLink } from 'react-router-dom';
import "../style/country.css";
import logo from '../img/freshAir.png';

class CountryPage extends React.Component {
    clickPrev = () => {
        this.props.decreseYear();
    }
    clickNext = () => {
        this.props.increaseYear();
    }
    Capitalize(str){
        return str.toUpperCase();
    }
    ShowData() {
        var me=this;
        return <div>
            <h3 className="tot-amount"><strong>{this.props.data.tonnes} x 10<sup>3</sup> TONNES </strong></h3>
            <h4>Pollutants:</h4>
            <br></br>
            <div className="grid-container">
                {
                this.props.data.pollutants.map(function(pol){
                return <div className="grid-item" id={pol.name}>
                    <h3><strong>{me.Capitalize(pol.name)}</strong></h3>
                    <h5>{pol.amount} X 10<sup>3</sup> TONNES</h5>
                    <p>{pol.name}</p>
                    <br></br>
                    <table className="pol-table">
                    <tbody>
                    {pol.polvars.map(function(polvar){
                        return <tr>
                            <td className="table-var">{polvar.var}</td>
                            <td className="table-ammount">{polvar.amount}</td>
                        </tr>
                    })
                }</tbody>
            </table>
            <div className="pol-graph" id={pol.name+"-img"} style={{display:'none'}}>
                <p>The graph below summarizes {pol.name}'s pollution in {me.props.data.name}, versus time: </p>
                <img src={ process.env.PUBLIC_URL + me.props.data.srcDict[pol.name]} />
            </div>
            </div> 
            })
            }
            </div>
  
            <h3 className="largest-pol"><strong>Largest pollutant: {this.props.data.largestPol}</strong></h3>
        </div>
    }
    NoData(){
        return <p>No data</p>
    }
    DecideData(props) {
        if (props.data.tonnes === "No data"){
            return this.NoData()
        }
        else{
            return this.ShowData()
        }
    }
    displayGraph (pol, mouse){
        var id=pol+"-img";
        var graph=document.getElementById(id);
        if (mouse =="over"){
            graph.style.display= "block";
            graph.style.cssText =`
                -webkit-animation: fadeIn 1.5s;
                animation: fadeIn 1.5s;
            `;
        }
        else{
            graph.style.display= "none";
        }
        
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        var pollutants=this.props.data.pollutants;
        for (let i in pollutants){
            var me=this;
            (function () {
                var pol=pollutants[i].name;
                document.getElementById(pol).addEventListener("mouseover", function() {
                    me.displayGraph(pol, "over");
                });
                document.getElementById(pol).addEventListener("mouseout", function() {
                    me.displayGraph(pol, "out");
                });
            }());
        }
    }
    render() {
        var me = this;
        ///var zz = require(''+this.props.data.totimgsrc);
        //var zz = require("../graphs/Total/Canada.png");
        return (<div>
            <NavLink className="navlink" to="/">
                <img src={logo}  className="main-logo" alt="logo" width="100px"  />
            </NavLink>
                <div className="country-page">
                    <center>
                        <Flag className="flag" code={this.props.cou} fallback={ <span>Unknown</span> } width="400"/>
                        <h1><strong>{this.Capitalize(this.props.data.name)}</strong></h1>
                        <div className="changeyear">
                            <div className="arrow left" onClick={this.clickPrev}>&#8249;</div>
                            <h1 className="year">{this.props.year}</h1>
                            <div className="arrow right" onClick={this.clickNext}>&#8250;</div>
                        </div>
                        {this.DecideData(this.props)}
                        <br></br>
                        <p>The graph below summarizes {this.props.data.name}'s total air pollution throughout the years:</p>
                        <img src={ process.env.PUBLIC_URL + this.props.data.totimgsrc} width="650"/>
                        <br></br>
                        <br></br>
                        
                    </center>
                </div>
                <center>
                <footer id="footer">
                        <div className="container">
                            <ul className="note">
                                <li>Note: All the data above is x 10<sup>3</sup> tonnes.</li>
                            </ul>
                        </div>
                </footer>
                </center>
            </div>
        )
    }
}

export default CountryPage