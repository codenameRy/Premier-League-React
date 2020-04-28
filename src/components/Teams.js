import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Teams extends Component {
    
    showTeams = () => {
        return this.props.allTeamsData.map(eachTeam => {
            return (
                <ul key={eachTeam.id}>
                  
                  <Link to={`/team/${eachTeam.id}`}>
                  <h2>{eachTeam.full_name}</h2>
                  </Link>
                </ul>
              )
        })
    }

    render() {
        return (
            <div>
                {this.showTeams()}
            </div>
        );
    }
}

export default Teams;