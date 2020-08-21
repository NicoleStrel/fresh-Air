
import React from 'react';
import Flag from 'react-world-flags';

class CountryPage extends React.Component {

    render() {
        return (
            <div>
                <p>This is the page for {this.props.cou} for year {this.props.year}</p>
                <h1>{this.props.data.name}</h1>
                <Flag  code={this.props.cou} fallback={ <span>Unknown</span> } width="100"/>
                <p>TOTAL: {this.props.data.tonnes} x 10<sup>3</sup> TONNES</p>
                <h4>Pollutants:</h4>
                <div>
                {
                this.props.data.pollutants.map(function(pol){
                return <p>{pol.name} -- {pol.amount}</p>
                })
                }
                </div>
            </div>
        )
    }
}

export default CountryPage