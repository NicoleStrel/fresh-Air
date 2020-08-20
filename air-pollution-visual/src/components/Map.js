import React from 'react';
import "../style/style.css";
import CountryData from './CountryData';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import Flag from 'react-world-flags';
import readBasicData from './readData';








class Map extends React.Component {
    renderCountries = () => {
        const countries = new CountryData();
            return countries.countryInfos.map((countryInfo) => {
                var fillColor='';
                if (countries.hasData(countryInfo)){
                    var countryData=this.props.data.filter(d => d.cou === countryInfo.cou)[0];
                    //console.log("name:",countryData.cou, ", hexcode: ", countryData.hexcode, ", pol: ", countryData.tonnes);
                    fillColor =countryData.hexcode;
                }
                else{
                    fillColor ='#FFFBD6';
                }
                const strokeColor = '#000000';
                const strokeWidth = countries.hasData(countryInfo) ? '2': '1'; 
                return countries.renderCountryPath(countryInfo, fillColor, strokeColor, strokeWidth);
            });
        };
    getSVG = () =>{
        return <svg
            className="svg-map" 
            xmlnsdc="http://purl.org/dc/elements/1.1/"
            xmlnscc="http://creativecommons.org/ns#"
            xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlnssvg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
            enable_background="new 0 0 2000 1001"
            pretty_print="False"
            style={{strokelinejoin:'round', stroke:'#000', fill: 'none'}}
            version="1.1"
            viewBox="0 0 2000 1001"
            width="1300px"
            height="900px"
            id="svg2"
            inkscapeversion="0.48.4 r9939"
            sodipodidocname="world.svg">
            <sodipodiNamedview
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1"
            objecttolerance="10"
            gridtolerance="10"
            guidetolerance="10"
            inkscapepageopacity="0"
            inkscapepageshadow="2"
            inkscapewindow-width="1920"
            inkscapewindow-height="1137"
            id="namedview231"
            showgrid="false"
            inkscapezoom="1.144"
            inkscapecx="593.00732"
            inkscapecy="460.46398"
            inkscapewindow-x="1192"
            inkscapewindow-y="118"
            inkscapewindow-maximized="1"
            inkscapecurrent-layer="svg2"
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
                    rdfaabout="">
                    <dcFormat>image/svg+xml</dcFormat>
                    <dcType
                        rdfresource="http://purl.org/dc/dcmitype/StillImage" />
                    <dcTitle />
                </ccWork>
                </rdfRDF>
            </metadata>
            {this.renderCountries()}
           
        </svg> 
    }
   

    renderToolTips = () => {
        return this.props.couTags.map((tag) =>{
            //let tooltipdata=readBasicData(tag, this.props.year);
            var countryData=this.props.data.filter(d => d.cou === tag)[0]
            if (countryData.tonnes !== "No data"){
                return <ReactTooltip id={tag} key={tag} className="tooltipp center" aria-haspopup='true'>
                    <div className="row" >
                        <Flag  code={tag} fallback={ <span>Unknown</span> } width="30"/>
                        <h5>{countryData.name}</h5>
                    </div>
                    <p>{countryData.tonnes} x 10<sup>3</sup> TONNES</p>
                    <p>({this.props.year})</p>
            </ReactTooltip>
            }
        });
    }

    componentDidMount() {
        //const countries = new CountryData();
        //console.log ( countries.countryInfos);
        $(document).ready(function() {
        });
        //console.log("coutags: ", this.props.couTags);
    }
    render() {
        return (
            <div className="map">
                <h1>{this.props.year}</h1>
                <center>
                <div  id="legend">
                        <div className="color-box"></div>
                        <p className="no-data">No data from CRUX OECD - Air Emissions by Source dataset</p>
                </div>
                </center>
                {this.getSVG()}
                {this.renderToolTips()}
                <center>
                <div className="gradientbar">
                gradient bar goes here
                </div>
                <i className="france flag"></i>
                </center>

            </div>
        )
     }
}
export default Map;