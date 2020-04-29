import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

class Teams extends Component {
    
    showTeams = () => {
        return this.props.allTeamsData.map(eachTeam => {
            return (
                <ul key={eachTeam.id}>
                  <MDBListGroupItem><Link to={`/team/${eachTeam.id}`}>
                  
                  <h2>{eachTeam.full_name}</h2>
                  
                  </Link></MDBListGroupItem>
                  </ul>
                  
                
              )
        })
    }

    render() {
        return (
            <MDBContainer>
                <MDBListGroup> 
                {this.showTeams()}
                </MDBListGroup> 
                </MDBContainer>

            
        );
    }
}

export default Teams;