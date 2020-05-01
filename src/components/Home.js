import React, { Component } from 'react';
import NbaNews from './NbaNews'

class Home extends Component {
    render() {
        return (
        
        <section className="nbaNews">
          <h3><strong>News Stream</strong></h3>
          <NbaNews allNBANews = {this.props.nbaNews}/>
          
          </section>
            
        );
    }
}

export default Home;