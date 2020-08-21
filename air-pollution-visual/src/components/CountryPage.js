
import React from 'react';
import Flag from 'react-world-flags';
import { NavLink } from 'react-router-dom';

class CountryPage extends React.Component {
    clickPrev = () => {
        this.props.decreseYear();
    }
    clickNext = () => {
        this.props.increaseYear();
    }
    render() {
        return (
            <div>
                <NavLink className="navlink" to="/">Back to Home</NavLink>
                <p>This is the page for {this.props.cou} for year {this.props.year}</p>
                <div >
                    <div onClick={this.clickPrev}>prev</div>
                    <h1>{this.props.year}</h1>
                    <div onClick={this.clickNext}>next</div>
                </div>
                <h1>{this.props.data.name}</h1>
                <Flag  code={this.props.cou} fallback={ <span>Unknown</span> } width="100"/>
                <p>TOTAL: {this.props.data.tonnes} x 10<sup>3</sup> TONNES</p>
                <h4>Pollutants:</h4>
                <div>
                {
                this.props.data.pollutants.map(function(pol){
                return <div>
                    <h3>{pol.name} -- {pol.amount}</h3>
                    {pol.polvars.map(function(polvar){
                        return <p>{polvar.var} xxx {polvar.amount}</p>
                    })
                    }
                </div>
                })
                }
                </div>
                <p>Largest pollutant: {this.props.data.largestPol}</p>
            </div>
        )
    }
}

export default CountryPage