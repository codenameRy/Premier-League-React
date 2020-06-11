import React, { Component } from 'react';
import SoccerNews from './SoccerNews'

class Home extends Component {
    render() {
        return (
        
        <section >
          <br></br>
          <h3><strong>News Stream</strong></h3>
          <br></br>
          <SoccerNews className="SoccerNews" allSoccerNews = {this.props.SoccerNews}/>
          </section>
            
        );
    }
}

export default Home;