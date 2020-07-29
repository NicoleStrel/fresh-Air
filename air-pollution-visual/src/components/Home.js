import React from 'react'
import PropTypes from 'prop-types'
import "../style/style.css";
import logo from '../img/ih.png';
import { NavLink } from 'react-router-dom';

function dragSperator( element, direction){
    var  md; 
    const first  = document.getElementById("left-pane");
    const second = document.getElementById("right-pane");
    console.log(first);
    console.log(second);
    
    element.onmousedown = onMouseDown;
    
    function onMouseDown( e ){
        //console.log("mouse down: " + e.clientX);
        md = {e,
            offsetLeft:  element.offsetLeft,
            offsetTop:   element.offsetTop,
            firstWidth:  first.offsetWidth,
            secondWidth: second.offsetWidth};
        document.onmousemove = onMouseMove;
        document.onmouseup = () => { 
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
    }
    
    function onMouseMove( e ){
        //console.log("mouse move: " + e.clientX);
        var delta = {x: e.clientX - md.e.clientX,
                    y: e.clientY - md.e.clientY};
        
        if (direction === "H" ){ // Horizontal
            // prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                    md.secondWidth);
            
            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
    }
}


class Home extends React.Component {
    
    componentDidMount() {
        dragSperator( document.getElementById("separator"), "H" );
    }
    render() {
        return (
            <div className="container">
                <div id="left-pane">
                    <div className="content-left" >
                        <img src={logo}  className="main-logo" alt="logo" width="450px"  />
                        <h1>Inhale   .   Exhale   .  </h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor. Praesent accumsan eros 
                            finibus nisi tincidunt pellentesque. Mauris pellentesque orci non tellus semper, ut imperdiet libero 
                            fermentum. Aenean porta fringilla varius. Integer nec lacinia justo.
                            
                            Maecenas ac vulputate velit. Phasellus ut auctor ante. Mauris neque libero, aliquam at imperdiet quis, 
                            efficitur quis est. Mauris et nibh porta, rhoncus purus et, vehicula risus. Mauris blandit ipsum felis, 
                            ut hendrerit ex finibus sed. Maecenas ac molestie tortor. Sed posuere ligula id lobortis imperdiet. Maecenas 
                            ullamcorper nec nulla vitae placerat. Vestibulum placerat posuere dui sed molestie. Aliquam erat volutpat.
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>Our Misson</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor. Praesent accumsan eros 
                            finibus nisi tincidunt pellentesque. Mauris pellentesque orci non tellus semper, ut imperdiet libero 
                            fermentum. Aenean porta fringilla varius. Integer nec lacinia justo.</span>

                        <h2>How Air pollution can be reduced</h2>
                        <ul>
                            <li>
                                <div className="air-poll-list-item">
                                    <img src="https://picsum.photos/100??random=1"></img>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                                </div>
                            </li>
                            <br></br>
                            <li>
                                <div className="air-poll-list-item">
                                    <img src="https://picsum.photos/100?random=2"></img>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                                </div>
                            </li>
                            <li>
                                <div className="air-poll-list-item">
                                    <img src="https://picsum.photos/100?random=3"></img>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
            
                                </div>
                            </li>
                            <li>
                                <div className="air-poll-list-item">
                                    <img src="https://picsum.photos/100?random=4"></img>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
            
                                </div>
                            </li>
                        </ul>
                        <br></br>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</span>
                            <br></br>
                        <br></br>
                        <br></br>
                        <center>
                        <p>&copy; Copyright 2020 ______</p>
                        </center>
                    </div>  
                </div>

                <div id="separator" ></div>
                <div id="right-pane">
                    <div id="cloud-circle"></div>
    
                    <NavLink className="cloud-navlink" to="/map"><p className="top-cloud">Map</p></NavLink>
                    <p className="top-cloud">Explore how air pollution affects the world</p>
                    <p className="underneath-text">Lorem ipsum dolor sit <br></br> amet, consectetur adipiscing elit.<br></br>  Nunc lacus sapien, mattis ac tellus et,<br></br> </p>
                    <svg width="0" height="0"> 
                    
                        <filter id="filter">
                        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
                        <feDisplacementMap in="SourceGraphic" scale="180" />
                        </filter>
                        
                    </svg>
                    
                    <div id="cloud-circle-2" className="animated fadeInUp ease-out-circ d-1 a-2"></div>
    
                    <NavLink className="cloud-navlink" to="/stats"><p className="top-cloud" id="cloud-2-top">Stats</p></NavLink>
                    <p className="top-cloud"  id="cloud-2-top">Country rank regarding air pollution</p>
                    <p className="underneath-text" id="cloud-2-under">Lorem ipsum dolor sit <br></br> amet, consectetur adipiscing elit.<br></br>  Nunc lacus sapien, mattis ac tellus et,<br></br> </p>
                    <svg width="0" height="0"> 
                    
                        <filter id="filter-2">
                        <feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="8" />
                        <feDisplacementMap in="SourceGraphic" scale="180" />
                        </filter>
                        
                    </svg>
                
                </div>
                

            </div>
            

        )
    }

}

export default Home