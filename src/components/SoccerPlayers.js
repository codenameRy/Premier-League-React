import React, { Component } from 'react';

class SoccerPlayers extends Component {
    showTeams = () => {
        return this.props.soccerAPI.map(eachTeam => {
            return (
                <ul key={eachTeam.id}>
                  <h2>{eachTeam.team_name}</h2>
                  <img style={{width: "50px"}}  src={eachTeam.team_badge} alt={eachTeam.team_badge}/>
                  <ul>{eachTeam.players.map(player => <li>
                    {player.player_name}
                    {player.player_country}
                    {player.player_}
                    {player.player_}
                    {player.player_}

                    {/* player_age: "33"
                        player_country: "Denmark"
                        player_goals: "0"
                        player_key: 140150332
                        player_match_played: "29"
                        player_name: "Schmeichel Kasper"
                        player_number: "1"
                        player_red_cards: "0"
                        player_type: "Goalkeepers"
                        player_yellow_cards: "2" */}
                  </li>)}</ul>
                  </ul>
                  
                
              )
        })
    }

    render() { 
        return (
            <div>
                
            </div>
        );
    }
}

export default SoccerPlayers;