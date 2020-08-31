
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
                return <div className="grid-item">
                    <h3><strong>{me.Capitalize(pol.name)}</strong></h3>
                    <h5>{pol.amount} X 10<sup>3</sup> TONNES</h5>
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
            
            </div>
            })
            }
            </div>
            <p>Note: All the data above is x 10<sup>3</sup> tonnes.</p>
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
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        var me = this;
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
                        

                    </center>
                </div>
            </div>
        )
    }
}

export default CountryPage