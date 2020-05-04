import React, { Component } from "react";

import { Link } from "react-router-dom";

class SoccerTeams extends Component {
  showTeams = () => {
    return this.props.soccerAPI.map((eachTeam, i) => {
      return (
        <div className = "teamBox" key={i}>
        <p>{eachTeam.team_name}</p>{" "}
          <Link to={`/SoccerTeams/${eachTeam.team_name}`}>
          <img
            // style={{ width: "50px" }}
            src={eachTeam.team_badge}
            alt={eachTeam.team_badge}
          />
          </Link>
          
        </div>
      );
    });
  };
  render() {
    return <div className="teams">
    {this.showTeams()}
    </div>
  }
}

export default SoccerTeams;
