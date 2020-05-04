import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

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
                  <MDBTable hover>
                    <MDBTableHead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Country</th>
                      </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                      <tr>
                        <td>{player.player_name}</td>
                        <td>{player.player_age}</td>
                        <td>{player.player_type.substr(0, player.player_type.length - 1)}
                      </td>
                      <td>{player.player_country}</td>
                      </tr>
                      </MDBTableBody>
                    </MDBTable>
                    
                  </div>
                )
              )}
            </h2>
            <p></p>
          </div>) : 
          (
          "Loading..."
        )}
      </div>
    );
  }
}

export default SoccerPlayers;
