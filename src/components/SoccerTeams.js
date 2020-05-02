import React, { Component } from "react";
import { Link } from "react-router-dom";

class SoccerTeams extends Component {
  showTeams = () => {
    return this.props.soccerAPI.map((eachTeam, i) => {
      return (
        <div className = "teamBox" key={i}>
          <Link to={`/SoccerTeams/${eachTeam.team_name}`}>
            <p>{eachTeam.team_name}</p>{" "}
          </Link>
          <img
            // style={{ width: "50px" }}
            src={eachTeam.team_badge}
            alt={eachTeam.team_badge}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="teams">
    {this.showTeams()}
    </div>;
  }
}

export default SoccerTeams;
