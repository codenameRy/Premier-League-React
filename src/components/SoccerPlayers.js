import React, { Component } from 'react';

class SoccerPlayers extends Component {
    


    render() { 
        let teamID = this.props.match.params.playerID
        let teamObj = this.props.soccerAPI.find(eachTeam => {
           
            console.log(eachTeam.id)
        return eachTeam.team_name === teamID
        })
        console.log( this.props, teamObj )
        return (
            <div>
            {teamObj? 
            (<div>
            <h1>{teamObj.team_name}</h1>

            <h2>Player Details: {teamObj.players.map(player => 
                  <li>
                  {player.player_name} <br/>
                  {player.player_country}
                  </li>
                  //import link 
                  
                  )}}</h2>
            <h2>Division: {teamObj.division}</h2>
            {/* <p>{secondTeam.logo}</p> */}
            <p></p>
            {/* <PlayerDetails allPlayersData = {this.props.playersData}/> */}
            
            </div>):
            ("Loading...")}
            </div>
        );
    }
}

export default SoccerPlayers;