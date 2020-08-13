import React from 'react';
import "../style/style.css";
import map from '../img/world.svg';
import CountryData from './CountryData';

class Map extends React.Component {
    componentDidMount() {
        const countries = new CountryData();
        console.log ( countries.countryInfos);
        /*dragSperator( document.getElementById("separator"), "H" );*/
        document.onmousemove = function(e){
            var cursorX = e.pageX;
            var cursorY = e.pageY;
            var map=document.getElementById('map');
            for (let i=0; i< countries.countryInfos.length; i++){
                let path=countries.countryInfos[i].path;
                var circle = document.getElementById('circle');
                /*console.log(countries.countryInfos[i].path)*/
                /*
                if (circle.isPointInFill(new DOMPoint(10, 10))){
                    console.log("inside!!!")
                }*/
            }
        }
    }
    render() {
        return (
            <div className="map">
                <h1>2017</h1>

                <img id="map"src={map} className="Map" alt="map" width="1300px"/>
                <circle id="circle" cx="50" cy="50" r="45"
      fill="white" stroke="black" stroke-width="10"/>
                <center>
                <div className="gradientbar">
                gradient bar goes here
                </div>
                </center>

            </div>
        )
     }
}
export default Map;