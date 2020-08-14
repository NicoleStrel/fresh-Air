import React from 'react';
import "../style/style.css";
import map from '../img/world.svg';
import CountryData from './CountryData';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';

const renderCountries = () => {
    const countries = new CountryData();
        return countries.countryInfos.map((countryInfo) => {
            const fillColor = countries.hasData(countryInfo) ? '#ffffff':'#FFFBD6'; 
            const strokeColor = '#000000';
            const strokeWidth = countries.hasData(countryInfo) ? '2': '1'; 
            //console.log (countries.renderCountryPath(countryInfo, fillColor, strokeColor, strokeWidth));
            return countries.renderCountryPath(countryInfo, fillColor, strokeColor, strokeWidth);
        });
    };


const getSVG = () =>{
    return <svg 
        xmlnsDc="http://purl.org/dc/elements/1.1/"
        xmlnsCc="http://creativecommons.org/ns#"
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnsSvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
        enable_background="new 0 0 2000 1001"
        pretty_print="False"
        style={{strokelinejoin:'round', stroke:'#000', fill: 'none'}}
        version="1.1"
        viewBox="0 0 2000 1001"
        width="1300px"
        height="900px"
        id="svg2"
        inkscapeVersion="0.48.4 r9939"
        sodipodiDocname="world.svg">
        <sodipodiNamedview
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1"
        objecttolerance="10"
        gridtolerance="10"
        guidetolerance="10"
        inkscapePageopacity="0"
        inkscapePageshadow="2"
        inkscapeWindow-width="1920"
        inkscapeWindow-height="1137"
        id="namedview231"
        showgrid="false"
        inkscapeZoom="1.144"
        inkscapeCx="593.00732"
        inkscapeCy="460.46398"
        inkscapeWindow-x="1192"
        inkscapeWindow-y="118"
        inkscapeWindow-maximized="1"
        inkscapeCurrent-layer="svg2"
        />
        <defs id="defs4">
        <style
          type="text/css"
          id="style6">
           { `.path { fillrule: 'evenodd'; }`} 
        </style>
        </defs>
        <metadata id="metadata8">
            <views
                id="views10">
            <view
                h="1001"
                padding="0"
                w="2000"
                id="view12">
                <proj
                    flip="auto"
                    id="robinson"
                    lon0="100.0" />
                <bbox
                    h="2233.1"
                    w="5271.17"
                    x="-2635.59"
                    y="-1308.06"
                    id="bbox15" />
            </view>
            </views>
            <rdfRDF>
            <ccWork
                rdfAAbout="">
                <dcFormat>image/svg+xml</dcFormat>
                <dcType
                    rdfResource="http://purl.org/dc/dcmitype/StillImage" />
                <dcTitle />
            </ccWork>
            </rdfRDF>
        </metadata>
        {renderCountries()}
       
    </svg> 
}
class Map extends React.Component {
    renderToolTips = () => {
        return this.props.couTags.map((tag) =>{
            return <ReactTooltip id={tag} >
                <span>{tag}</span>
            </ReactTooltip>
        });
    }

    componentDidMount() {
        const countries = new CountryData();
        //console.log ( countries.countryInfos);
        $(document).ready(function() {
        });
        //console.log("coutags: ", this.props.couTags);
    }
    render() {
        return (
            <div className="map">
                <h1>2017</h1>
                {getSVG()}
                {this.renderToolTips()}
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