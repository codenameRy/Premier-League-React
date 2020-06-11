import React, { Component } from "react";
import { MDBMedia } from "mdbreact";
// import { Route } from 'react-router';

class NbaNews extends Component {
  
  news = () => {
    return this.props.allNBANews.map((eachNews, i) => {
      return (
        <div key={i} className="container">
          <MDBMedia tag="li">
            <MDBMedia
              left
              href={eachNews.url}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <MDBMedia
                // style={{ width: "50vh" }}
                object
                src={eachNews.urlToImage}
                alt="Generic placeholder image"
                className="responsive" 
              />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>
                <strong>{eachNews.title}</strong>
              </MDBMedia>
              <div dangerouslySetInnerHTML={{ __html: eachNews.description }} />
               
            </MDBMedia>
          </MDBMedia>
        </div>
      );
    });
  };

  render() {
    return (
      <MDBMedia list className="mt-3">
        <div>
          {this.news()}
        </div>
      </MDBMedia>
    );
  }
}

export default NbaNews;