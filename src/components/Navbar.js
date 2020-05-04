import React, { Component } from "react";
import { Link } from "react-router-dom";
import premierLargeLogo from './images/premier_logo_large.png'

export default class Navbar extends Component {
  componentDidMount() {
    //window.onload happens once when the components first mounts
    console.log(this);
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-white">
        <div className="container">
          <div>
          
          <img src={premierLargeLogo} height="30px" className="Ball" alt="football" />
        
        </div>
          <Link className="navbar" to="/">
            Home
          </Link>
          {/* <Link className="navbar" to="/Teams">
            Teams
          </Link> */}
          <Link className="navbar" to="/SoccerTeams">
            Premier League Teams
          </Link>
          <Link className="navbar" to="/VideoPlayer">
            Videos
          </Link>
          <Link className="navbar" to="/History">
            History
          </Link>
          <Link className="navbar" to="/About">
            About
          </Link>

        </div>
      </nav>
    );
  }
}
