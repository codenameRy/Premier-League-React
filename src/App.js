import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

let baseURL = 'https://www.balldontlie.io/api/v1/'
let endPoints = { 
  'teams': 'teams',
  'players': 'players',
  'stats': 'stats'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      allTeams: [],
      allPlayers: [],
      allStats: []
    }
    //define params here and pass to function
    this.params = {}
}
  // state = {
  //   allTeams: [],
  //   allPlayers: [],
  //   allStats: []
  // }

  // Older API Call
  //async await - Sequential calls or independent functions
  // componentDidMount = () => {

  // }

  componentDidMount() {
    console.log(
      'component mounted'
    )
    // Foreach key in the endPoints we hit the AXIOS GET.
            Object.keys(endPoints).forEach(key => {
                // Call Axios from here
                this.getDataFromEndpoints(
                    endPoints[key],
                    this.params,
                    key
                );
            });
    }

    /**API ENDPOINT FUNCTIONS */
    
getDataFromEndpoints = (endPoint, params, stateKey) => {
  this.setState({
              [`${stateKey}DataLoading`]: true,
              [`${stateKey}Data`]: [],
              [`${stateKey}DataError`]: null,
          }, () => {
              Axios.get(`${baseURL}${endPoint}`)
              .then(res => {
                console.log(res)  
                const { data } = res;
                  this.setState({
                      [`${stateKey}DataLoading`]: false,
                      [`${stateKey}Data`]: data.results,
                      [`${stateKey}DataError`]: false,
                  })
              })
              .catch(error => {
                  if (error.response) {
                  /** The request was made and the server responded with a status code that falls out of the range of 2xx **/
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  } else if (error.request) {
                  /** The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js **/
                  console.log(error.request);
                  } else {
                  /** Something happened in setting up the request that triggered an Error **/
                  console.log('Error', error.message);
                  }
                  /** Setting DataError true and DataErrorString **/
                  
                  this.setState({
                      [`${stateKey}DataLoading`]: false,
                      [`${stateKey}DataError`]: true,
                      [`${stateKey}DataErrorString`]: error.message,
                  })
                  console.log(error.config);
              }) 
          });
      }


  //Step 1 -API Call
  //STep 2 - Add'l APIs calls
  //Step 3 - Display content
  //function for 3 API calls and load within componentDidMount

 //API Endpoint Function

  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
 
        
    </div>
    );
  }
}

export default App;
