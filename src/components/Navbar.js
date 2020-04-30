import React, { Component } from 'react'

export default class Navbar extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/">Teams</a>
            <a className="navbar-brand" href="/">Players</a>
            <div className="dropdown">
                {/* <button className="btn btn-secondary dropdown-toggle bg-primary mb-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div> */}
</div>
            </div>
      </nav>
        )
    }
}
