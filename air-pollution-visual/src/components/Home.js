import React from 'react'
import PropTypes from 'prop-types'
import "../style/style.css";
import logo from '../img/freshAir.png';
import Map from './Map';
import Stats from './Stats';

import { NavLink } from 'react-router-dom';


class Home extends React.Component {
    
    
    render() {
        return (
                <div >
                    <center>
                    <div className="section-1">
                        <img src={logo}  className="main-logo" alt="logo" width="400px"  />

                        <div className="slidefirstCloud" id="cloud-circle"></div>

                        <p className="underneath-text">Lorem ipsum dolor sit <br></br> amet, consectetur adipiscing elit.<br></br>  Nunc lacus sapien, mattis ac <br></br> </p>

                        <svg  width="0" height="0"> 

                            <filter id="filter">
                            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
                            <feDisplacementMap in="SourceGraphic" scale="180" />
                            </filter>
                            
                        </svg>

                        <div id="cloud-circle-2" className="slidesecondCloud"></div>

                        <p className="underneath-text" id="cloud-2-under">Lorem ipsum dolor sit <br></br> amet, consectetur adipiscing elit.<br></br>  Nunc lacus sapien, mattis ac <br></br> </p>
                        <svg width="0" height="0"> 

                            <filter id="filter-2">
                            <feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="8" />
                            <feDisplacementMap in="SourceGraphic" scale="180" />
                            </filter>
                            
                        </svg>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="section-2 w-75">
                        <h2>Our Misson</h2>
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
                        <h2>How Air pollution can be reduced</h2>
                        <br></br>
                        <div className="row">
                            <div className="col-md air-poll-list-item">
                     
                                <img src="https://picsum.photos/100??random=1"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                                    mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                                    at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                            </div>
                            <br></br>
                            <div className="col-md air-poll-list-item">
                                <img src="https://picsum.photos/100?random=2"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                                    mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                                    at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                            </div>
                            <br></br>
                        </div>
                        
                        <div className="row">
                            <div className="col-md air-poll-list-item">

                                <img src="https://picsum.photos/100?random=3"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                                    mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                                    at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                            </div>
                            <br></br>
                            <div className="col-md air-poll-list-item">

                                <img src="https://picsum.photos/100?random=4"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                                    mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                                    at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</p>
                            </div>
       
                        </div>
                            <br></br>
                        <br></br>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus sapien, 
                            mattis ac tellus et, venenatis consequat sem. Praesent laoreet justo sed nisi eleifend, 
                            at laoreet nisl congue. Donec blandit urna sit amet faucibus porttitor.</span>
                            <br></br>
                        <br></br>
                        <br></br>

                        
                       
                    </div>
                    <Map />
                    <Stats />

                    <footer id="footer">
                        <div className="container">
                            <ul className="copyright">
                                <li>&copy; copyright 2020 freshAir</li>
                            </ul>
                        </div>
                    </footer>
                    </center>
            </div>

        )
    }

}

export default Home