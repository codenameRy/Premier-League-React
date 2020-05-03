import React, { Component } from "react";

class SoccerPlayers extends Component {
  render() {
    let teamID = this.props.match.params.playerID;
    let teamObj = this.props.soccerAPI.find((eachTeam) => {
      console.log(eachTeam.team_name);
      return eachTeam.team_name === teamID;
    });
    console.log(this.props, teamObj);
    return (
      <div>
        {teamObj ? (
          <div>
            <h1>{teamObj.team_name}</h1>
            <img
              // style={{ width: "50px" }}
              src={teamObj.team_badge}
              alt={teamObj.team_badge}
            />

            <h2>
              <br></br>
              <strong>Player Details </strong>
              {teamObj.players.map(
                (player, i) => (
                  <div key={i}>
                    <table className="tableClass" >
                      <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Country</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>{player.player_name} </td>
                        <td>{player.player_age}</td>
                        <td>{player.player_type.substr(0, player.player_type.length - 1)}
                      </td>
                      <td>{player.player_country}</td>
                      </tr>
                      </tbody>
                    </table>
                    
                  </div>
                )
                //import link
              )}
            </h2>
            <h2>Division: {teamObj.division}</h2>
            {/* <p>{secondTeam.logo}</p> */}
            <p></p>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default SoccerPlayers;
