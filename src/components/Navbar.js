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
      <nav className="navbar sticky-top navbar-light bg-white rounded-top">
        <div className="container">
          <div>
          <img src={premierLargeLogo} height="30px" className="Ball" alt="football" />
        </div>
          <Link className="navbar" to="/Home">
            <strong>Home</strong>
          </Link>
          <Link className="navbar" to="/SoccerTeams">
            <strong>Teams</strong>
          </Link>
          <Link className="navbar" to="/VideoPlayer">
            <strong>Videos</strong>
          </Link>
          <Link className="navbar" to="/History">
            <strong>History</strong>
          </Link>
          <Link className="navbar" to="/About">
            <strong>About</strong>
          </Link>

        </div>
      </nav>
    );
  }
}
