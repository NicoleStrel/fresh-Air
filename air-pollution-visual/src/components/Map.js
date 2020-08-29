import React from 'react';
import "../style/style.css";
import CountryData from './CountryData';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import Flag from 'react-world-flags';

function dragElement(elmnt, colors){
    var milestonesX=[];
    console.log (milestonesX);

    calculateMilestones();
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

    //----------draggable element funcs----------
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        //oldY = e.clientY;
       
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
       var changed=false;
        
        //check if cursor is in the right position to switch 
       for (let m in milestonesX){
        //let varPos=elmnt.offsetTop -oldY + e.clientY;

           if ((e.clientX)>=(milestonesX[m]-5) && (e.clientX)<=(milestonesX[m]+5)){
               //console.log("current Y:  ", varPos, "changed y: ", milestonesY[m])
               var oldLeft=elmnt.style.left;
               elmnt.style.left = (milestonesX[m]) + "px";
               if (oldLeft!==elmnt.style.left){
                    changed=true;
               }
               break;
           }
       }
       if(changed){
            //highlight the colors on the map
       }
        
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
    function calculateMilestones(){
        for (let i=0; i<colors.length; i++){
            let color=colors[i];
            var color_div=document.getElementById(color);
            milestonesX.push($(color_div).position().left);
        }
    }

}


class Map extends React.Component {
    colorsList=[];

    constructor(props, context){
        super(props, context);
        this.state={colors: []}
    }
    
    componentDidMount() {
        console.log("hi")
        dragElement( document.getElementById("separator"), this.colorsList);
    }
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
            height="600px"
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
    clickPrev = () => {
        this.props.decreseYear();
    }
    clickNext = () => {
        this.props.increaseYear();
    }
    /*
    setColors = (newcolors) => {
        this.setState(prevState => ({
            colors: newcolors
          }))
        console.log(this.state.colors);
    }*/
    render() {
        var me = this;

        return (
            <div className="map">
                <center>
                <div className="changeyear">
                    <div className="arrow-map left-map" onClick={this.clickPrev}>&#8249;</div>
                    <h1 className="year-map">{this.props.year}</h1>
                    <div className="arrow-map right-map" onClick={this.clickNext}>&#8250;</div>
                </div>
                </center>
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
                <div id="separator" ></div>
                
                {   
                    this.props.gradient.map(function(color){
                        var divStyle = {
                            backgroundColor: color,
                        }
                        /*
                        var oldcolors=me.state.colors;
                        console.log (typeof(me.state.colors))
                        var newcolors=oldcolors.push(color);*/
                        me.colorsList.push(color);
                        return <div className="color-gradient" id={color}style={divStyle}></div>
                    })
                    
                }
                </div>
                </center>

            </div>
        )
     }
}
export default Map;