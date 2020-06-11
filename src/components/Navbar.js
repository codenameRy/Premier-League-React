import React, { Component } from "react";
import { Link } from "react-router-dom";
import premierLargeLogo from "./images/premier_logo_large.png";
import 'bootstrap-css-only/css/bootstrap.min.css'; 

class Navbar extends Component {
  componentDidMount() {
    //window.onload happens once when the components first mounts
    console.log(this);
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light bg-white ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-link" to="/Home">
        <img src={premierLargeLogo} height="30px" className=" Ball" alt="football" />
          </Link>        
        

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/Home">
              <strong>Home</strong> 
                {/* <span className="sr-only">(current)</span> */}
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link className="nav-link" to="/SoccerTeams" >
            <strong>Teams</strong>
          </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/VideoPlayer">
                <strong>Videos</strong>
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/History">
              <strong>History</strong>
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link className="nav-link" to="/About">
              <strong>About</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
