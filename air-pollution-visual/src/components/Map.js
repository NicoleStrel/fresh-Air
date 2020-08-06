import React from 'react';
import "../style/style.css";
import map from '../img/world.svg';

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <h1>MAP</h1>
                <p>2017</p>

                <img src={map} className="Map" alt="map" width="1300px"/>
                <center>
                <div class="gradientbar">
                hi
                </div>
                </center>
                
                <p> HEIID</p>
                <p> HEIID</p>
                <p> HEIID</p>
                <p> HEIID</p>
            </div>
        )
     }
}
export default Map;