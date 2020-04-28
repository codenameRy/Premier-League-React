import React, { Component } from 'react';

class TeamDetails extends Component {
    render() {
        let teamID = this.props.match.params.teamID
        let teamObj = this.props.allTeamsData.find(eachTeam => {
            console.log(eachTeam.id)
        return eachTeam.id == teamID
        })
        console.log(teamID, this.props, teamObj, )
        return (
            <div>
            {teamObj? 
            (<div>
            <h1>{teamObj.full_name}</h1>
            <p>{teamObj.full_name}</p>
            <p></p>
            <p></p>
            
            </div>):
            ("Loading...")}
            </div>
        );
    }
}

export default TeamDetails;