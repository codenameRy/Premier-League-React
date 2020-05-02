import React, { Component } from 'react';
import { MDBMedia } from 'mdbreact';
// import { Route } from 'react-router';

class NbaNews extends Component {
    
    nbaNews = () => {
        return this.props.allNBANews.map((eachNews, i) => {

            return (
                <ul key={i}>
                  <MDBMedia tag="li">
        <MDBMedia left href={eachNews.url} target="_blank" rel="noopener noreferrer">
          <MDBMedia style={{width: "50vh"}} object src={eachNews.urlToImage}  alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
          <strong>{eachNews.title}</strong>
          </MDBMedia>
          <div dangerouslySetInnerHTML={{__html: eachNews.description}} /> 
          </MDBMedia>
      </MDBMedia>
                </ul>
              )
        })
    }
    
    render() {
        return (
            <MDBMedia list className="mt-3">
                <div>
                {this.nbaNews()}
                </div>
            </MDBMedia>
            
        );
    }
}

export default NbaNews;

