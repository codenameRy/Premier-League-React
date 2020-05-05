import React, { Component } from 'react';
import NbaNews from './NbaNews'

class Home extends Component {
    render() {
        return (
        
        <section >
          <br></br>
          <h3><strong>News Stream</strong></h3>
          <br></br>
          <NbaNews className="nbaNews" allNBANews = {this.props.nbaNews}/>
          
          </section>
            
        );
    }
}

export default Home;