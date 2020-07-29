import React from 'react';
import "../style/style.css";
import { NavLink } from 'react-router-dom';
 
function openNav() {
    console.log("open")
    document.getElementById("sidebar").style.height = "250px";
    document.getElementById("sidebar").style.width = "150px";
    document.getElementById("main").style.display = "none";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.height = "0px";
    document.getElementById("main").style.display = "block";
    document.getElementById("sidebar").style.width = "0px";
}

class Navigation extends React.Component {

    render() {
        return (
        <div className="navigator">
            <div id="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> <br></br>
                <div  className="nav-links">
                <NavLink className="navlink" to="/">Home</NavLink> <br></br>
                <NavLink className="navlink" to="/map">Map</NavLink> <br></br>
                <NavLink className="navlink" to="/stats">Stats</NavLink>
                </div>
            </div>
            <div id="main">
                <button className="openbtn" onClick={openNav}>&#9776;</button>
            </div>
        </div>

        )
    }
}
 
export default Navigation;