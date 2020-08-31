import React from 'react';
import "../style/style.css";
import CountryData from './CountryData';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import Flag from 'react-world-flags';

class Map extends React.Component {
    colorsList=[];
    severities =[
        'Low',
        'Satisfactory',
        'Moderate',
        'Poor',
        'Severe',
    ]
    
    /*
    constructor(props, context){
        super(props, context);
        //this.state={colors: []}
    }
    */
    state = { 
        selected_hex:  '#FFFFFF',
        severity: this.severities[0]
    }
    Capitalize(str){
        return str.toUpperCase();
    }
    updateState = ( color, severity) => {
        this.setState(() => ({
            selected_hex: color,
            severity: severity,
        }))
    }

    dragElement(elmnt, colors, severities){
        var me=this;
        const segment=colors.length/5;
        var milestonesX=[];
        console.log (milestonesX);
    
        calculateMilestones();
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    
        //----------draggable element funcs----------
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            
           var changed=false;
            var chosen=0;
            //check if cursor is in the right position to switch 
           for (let m in milestonesX){
                if ((e.clientX)>=(milestonesX[m][0]-0.5) && (e.clientX)<=(milestonesX[m][0]+0.5)){
                   var oldLeft=elmnt.style.left;
                   elmnt.style.left = (milestonesX[m][0]) + "px";
                   if (oldLeft!==elmnt.style.left){
                        changed=true;
                        chosen =milestonesX[m];
                   }
                   break;
               }
           }

           if(changed){
               //color
                var color =me.Capitalize(chosen[1].id);
                //polution
                var idx= colors.findIndex(col => col === chosen[1].id);
               
                var severity='';
                for (let i=1; i<5; i++){
                    if (idx <=segment*i){
                        severity=severities[i-1];
                        break;
                    }
                }
                if (severity == ''){
                    severity=severities[4];
                }
                me.updateState(color, severity);
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
                milestonesX.push([$(color_div).position().left, color_div]);
            }
        }
    
    }
    componentDidMount() {
        var seperator=document.getElementById("separator");
        this.dragElement(seperator , this.colorsList, this.severities);
    }
    renderCountries = () => {
        const countries = new CountryData();
            return countries.countryInfos.map((countryInfo) => {
                //fill and stoke
                var fillColor='';
                var strokeColor='';
                var strokeWidth='';
                if (countries.hasData(countryInfo)){
                    var countryData=this.props.data.filter(d => d.cou === countryInfo.cou)[0];
                    fillColor =countryData.hexcode;
                    //console.log (this.state.selected_hex," vs " , fillColor.toUpperCase())
                    if (this.state.selected_hex == fillColor.toUpperCase()){
                        strokeColor= '#a30202';
                        strokeWidth = '3px';
                    }
                    else{
                        strokeColor = '#000000';
                        strokeWidth = '1px';
                    }
                }
                else{
                    fillColor = '#FFFBD6';
                    strokeColor = '#000000';
                    strokeWidth = '1px';
                }
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
                
                <p>Drag the red bar below to browse the shades of pollution on the map:</p>
                
                <div className="gradientbar">
                    
                    <div id="separator" ></div>
 
                    
                    {   
                        this.props.gradient.map(function(color){
                            var divStyle = {
                                backgroundColor: color,
                            }
                            me.colorsList.push(color);
                            return <div className="color-gradient" id={color} style={divStyle}></div>
                        })
                        
                    }
                    
                </div>
                <p className="severity">{this.state.severity} pollution</p>
                
                </center>
                
            </div>

        )
     }
}
export default Map;