import React, { Component } from 'react';



class TeamDetails extends Component {

    // getTeamInfo = () => {
    //     let teamID = this.props.match.params.teamID
    //     let teamObj = this.props.allTeamsData.find(eachTeam => {
    //         console.log(eachTeam.id)
    //     return eachTeam.id == teamID
    //     })
    //     // let nickName = teamObj ? teamObj.full_name.split(' ').reverse()[0] : undefined;
    //     // //reverse alternative with [0]
    //     return teamObj?.name;
    // }
    // componentDidMount() {
    //     let nN = this.getTeamInfo();
    //     console.log(nN)
    //     if(nN)this.props.getSecondTeam(nN);
    // }
    // componentDidUpdate(prevProps) {
    //     if(this.props.allTeamsData !== prevProps.allTeamsData || this.props.match.params.teamID !== prevProps.match.params.teamID) {
    //         let nN = this.getTeamInfo();
    //         console.log(nN)
    //         this.props.getSecondTeam(nN);
    //     }
    // }
    render() {
        let teamID = this.props.match.params.teamID
        let teamObj = this.props.allTeamsData.find(eachTeam => {
            // console.log(eachTeam.id)
        return eachTeam.id == teamID
        })
        console.log(teamID, this.props, teamObj )
    

        return (
            <div>
            {teamObj? 
            (<div>
            <h1>{teamObj.full_name}</h1>

            <h2>Conference: {teamObj.conference}</h2>
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

export default TeamDetails;