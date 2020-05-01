import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary mb-3 ">
            <div className="container">
            <div></div>
            <a className="navbar-brand" href="/">Home</a>
            <Link className="navbar-brand" to="/Teams">Teams</Link>
            <Link className="navbar-brand" to="/SoccerTeams">Premier League Teams</Link>
            <Link className="navbar-brand" to="/VideoPlayer">Videos</Link>
            
            <div>
                
</div>
            </div>
      </nav>
        )
    }
}
