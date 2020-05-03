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
      <nav className="navbar navbar-light">
        <div className="container">
          <div>
          
          <img src={premierLargeLogo} height="30px" className="Ball" alt="football" />
        
        </div>
          <Link className="navbar" to="/">
            Home
          </Link>
          <Link className="navbar" to="/Teams">
            Teams
          </Link>
          <Link className="navbar" to="/SoccerTeams">
            Premier League Teams
          </Link>
          <Link className="navbar" to="/VideoPlayer">
            Videos
          </Link>

        </div>
      </nav>
    );
  }
}
