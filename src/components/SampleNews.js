import React, { Component } from 'react';
// import { Route } from 'react-router';

class NbaNews extends Component {
    
    nbaNews = () => {
        return this.props.allNBANews.map((eachNews, i) => {

            //Pagination - Variable when user clicks
            //Cards 
            //slice(0,10)
            
            return (
                <div>

                </div>
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

<MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
      </MDBMedia>
      </MDBMedia>

      <ul key={i}>
                  <div>
                  <p><strong>{eachNews.title}</strong></p>
                  <img style={{width: "40vh"}}  src={eachNews.urlToImage} alt={eachNews.urlToImage}/>
                  <ul className='newsParent'>
                  <div dangerouslySetInnerHTML={{__html: eachNews.description}} /> 
                  </ul>
                 
                  <a href={eachNews.url} target="_blank" rel="noopener noreferrer"><p>{eachNews.url}</p></a>
                  
                  </div>
                </ul>


<MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href={eachNews.url} target="_blank" rel="noopener noreferrer">
          <MDBMedia object src={eachNews.urlToImage}  alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
          <strong>{eachNews.title}</strong>
          </MDBMedia>
          <div dangerouslySetInnerHTML={{__html: eachNews.description}} /> 
          </MDBMedia>
      </MDBMedia>
      </MDBMedia>