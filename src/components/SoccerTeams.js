import React, { Component } from 'react';

class SoccerTeams extends Component {

    showTeams = () => {
        return this.props.soccerAPI.map((eachTeam, i) => {
            return (
                <ul key={i}>
                  <h2>{eachTeam.team_name}</h2>
                  <img style={{width: "50px"}}  src={eachTeam.team_badge} alt={eachTeam.team_badge}/>
                  <ul>{eachTeam.players.map(player => <li>{player.player_name}

                  </li>)}</ul>
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

export default SoccerTeams;