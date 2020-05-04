import React, { Component } from 'react';
import NbaNews from './NbaNews'

class Home extends Component {
    render() {
        return (
        
        <section className="nbaNews">
          <br></br>
          <h3><strong>News Stream</strong></h3>
          <br></br>
          <NbaNews allNBANews = {this.props.nbaNews}/>
          
          </section>
            
        );
    }
}

export default Home;