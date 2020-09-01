import React from 'react'
import "../style/style.css";
import logo from '../img/freshAir.png';
import Map from './Map';
import Stats from './Stats';
import car from '../img/pickup-car.png';
import fire from '../img/fire.png';
import energy from '../img/energy.png';
import bottle from '../img/bottle.png';

class Home extends React.Component {
    
    
    render() {
        return (
                <div >
                    <center>
                    <div className="section-1">
                        <img src={logo}  className="main-logo" alt="logo" width="400px"  />

                        <div className="slidefirstCloud" id="cloud-circle"></div>
                          
                        <p className="underneath-text">Humans have emitted<br></br>greenhouse gases starting<br></br>over 2,000 years ago.<br></br> </p>

                        <svg  width="0" height="0"> 

                            <filter id="filter">
                            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
                            <feDisplacementMap in="SourceGraphic" scale="180" />
                            </filter>
                            
                        </svg>

                        <div id="cloud-circle-2" className="slidesecondCloud"></div>
                        <p className="underneath-text" id="cloud-2-under">Air pollution is one of the larger<br></br>factors contributing to global warming.<br></br>What can we do to reduce it?<br></br> </p>
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
                        <span>To raise awareness about air pollution across the world and provide resources/visuals to analyze the 
                            pollutants disposed of in the past. We believe that learning from the past and acknowledging our harmful 
                            impact on the environment, we as a human race can move forward in creating a more sustainable and healthy 
                            future for the next generation. 
                            FreshAir provides the data, interpolation of trends, the ranking of countries, and an interactive map for discovering the effects of air pollution throughout the years.
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>How You Can Reduce Air Pollution</h2>
                        <p>Change starts with you. Do not wait for governments or industries to start preventing pollution and global warming, its up to you to start. </p>
                        <br></br>
                        <div className="row">
                            <div className="col-md air-poll-list-item">
                                <img src={car} alt="car-icon"></img>
                                <span><strong>Maintain minimal pollution from your car.</strong> Reduce the number of trips you take with your car, carpool/bike/walk whenever you can, consider zero or near-zero emission cars, and keep your car in good shape- to prevent unnecessary smog coming from your exhaust pipe.
                                </span>
                            </div>
                            <br></br>
                            <div className="col-md air-poll-list-item">
                                <img src={fire} alt="fire-icon"></img>
                                <span><strong>Reduce fireplace or woodstove use.</strong> Smog is created from open flames so the use of these things should be minimal. Consider using electric lighters and lighter fluid that produces fewer emissions than traditional charcoal lighter fluid to start the fires.</span>
                            </div>
                            <br></br>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md air-poll-list-item">
                                <img src={energy} alt="energy-icon"></img>
                                <span><strong>Reconsider how you use your energy.</strong> Install for energy-efficient lighting and appliances, use the thermostat wisely (eg. make your thermostat a few degrees cooler in the winter, and consider using solar power or other eco-friendly energy sources.
                                </span>
                            </div>
                            <br></br>
                            <div className="col-md air-poll-list-item">
                                <img src={bottle} alt="bottle-icon"></img>
                                <span><strong>Take care in what products you use.</strong> Avoid or minimize aerosol products-that contribute to smog, and instead look for water-based options. As well, buy products that are reusable and avoid plastic water bottles due to their waste and harmful factory production. </span>
                            </div>
       
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        
                       
                    </div>
                    <Map couTags={this.props.couTags} year={this.props.year} data={this.props.data} increaseYear={this.props.increaseYear} decreseYear={this.props.decreseYear} gradient={this.props.gradient}/>
                    <Stats data={this.props.data}/>

                    <footer id="footer">
                        <div className="container">
                            <ul className="copyright">
                                <li>&copy; copyright 2020 freshAir</li>
                            </ul>
                            {/*
                            <ul className="credits">
                                <li>(....CRUX dataset credits go here! .. )</li>
                            </ul>
                            */}
                        </div>
                    </footer>
                    </center>
            </div>

        )
    }

}

export default Home