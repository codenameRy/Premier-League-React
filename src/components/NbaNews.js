import React, { Component } from 'react';
// import { Route } from 'react-router';

class NbaNews extends Component {
    
    nbaNews = () => {
        return this.props.allNBANews.slice(0,10).map((eachNews, i) => {

            //Pagination - Variable when user clicks
            //Cards 
            
            return (
                <ul key={i}>
                  <div>
                  <p><strong>{eachNews.title}</strong></p>
                  <img style={{width: "40vh"}}  src={eachNews.urlToImage} alt={eachNews.urlToImage}/>
                  <div dangerouslySetInnerHTML={{__html: eachNews.description}} /> 
                  {eachNews.description}
                 
                  {/* <p>{eachNews.url}</p> */}
                  <a href={eachNews.url} target="_blank" rel="noopener noreferrer"><p>{eachNews.url}</p></a>
                  
                  </div>
                  
                </ul>
              )
        })
    }
    
    render() {
        return (
            <div>
                {this.nbaNews()}
            </div>
        );
    }
}

export default NbaNews;