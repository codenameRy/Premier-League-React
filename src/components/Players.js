import React, { Component } from 'react';

class Players extends Component {

    showPlayers = () => {
        return this.props.allPlayersData.map(eachPlayer => {
            return (
                <div>
                <ul key={eachPlayer.id}>

                  <h2>{eachPlayer.first_name} {eachPlayer.last_name}</h2>

                  </ul>
                  </div>
                
              )
        })
    }

    render() {
        return (
            <ul>
                {this.showPlayers()}
            </ul> 

        );
    }
}

export default Players;