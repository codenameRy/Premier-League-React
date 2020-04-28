import React, { Component } from 'react';


class NbaNews extends Component {
    
    nbaNews = () => {
        return this.props.allNBANews.map((eachNews, i) => {
            
            return (
                <ul key={i}>
                  <div>
                  <p><strong>{eachNews.title}</strong></p>
                  <img style={{width: "40vh"}}  src={eachNews.urlToImage} alt={eachNews.urlToImage}/>
                  <div dangerouslySetInnerHTML={{__html: eachNews.description}} /> 
                  {eachNews.description}
                  <p>{eachNews.url}</p>
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