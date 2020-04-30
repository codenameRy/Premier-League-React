import React, { Component } from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router';
import ballImage from './nba_ball.png';
import './App.css';
import Axios from 'axios';
import Teams from './components/Teams'
import TeamDetails from  './components/TeamDetails'
import NbaNews from './components/NbaNews';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer'

//NBA Team
let baseURL = 'https://www.balldontlie.io/api/v1/'
let endPoints = { 
  'teams': 'teams',
  'players': 'players',
  'seasonAvg': 'season_averages?player_ids[]=237',
}

//NBA News - News API
let newsBaseURL = 'https://newsapi.org/'
let newEndPoint = 'v2/everything?q=nba&apiKey=38407b35f95c48359a0c4b5337e10220'
let newEndPointAbbrv = newEndPoint

//New Sports API
// let bballURL = 'https://api-nba-v1.p.rapidapi.com/'
// let bballEndPoints = 'teams&x-rapidapi-key=50599fc345mshab48f1d06f317c5p14b68ajsn32148e6c9481'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      playersData: [],
      seasonAvgData: [],
      teamsData: [],
      nbaNews :[],
      newNBATeam: []
    }
    //define params here and pass to function
    this.params = {}
}


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
            
            //API Call for news
            Axios.get(newsBaseURL+newEndPointAbbrv)
          .then(responseNews => {
            console.log(responseNews)  
            this.setState({
              nbaNews: responseNews.data.articles
            })
          })



          
    } // End on componentDid Moint
            

    /**API ENDPOINT FUNCTIONS */
    
getDataFromEndpoints = (endPoint, params, stateKey) => {
  this.setState({
              [`${stateKey}DataLoading`]: true,
              [`${stateKey}Data`]: [],
              [`${stateKey}DataError`]: null,
          }, () => {
              Axios.get(`${baseURL}${endPoint}`)
              .then(response => {
                console.log(response)  
                this.setState({
                  [`${stateKey}Data`]: response.data.data
                });
              })
              .catch(error => {
                console.log(error)
              }) 
          });
      }


  //Step 1 -API Call
  //STep 2 - Add'l APIs calls
  //Step 3 - Display content
  //function for 3 API calls and load within componentDidMount

 //API Endpoint Function

  
  render() {
    const {
      // allTeamsDataLoading,
      // allTeamsDataError,
      // allTeamsDataErrorString,
      // allPlayersData,
      // allPlayersDataLoading,
      // allPlayersDataError,
      // allPlayersDataErrorString,
      // allStatsData,
      // allStatsDataLoading,
      // allStatsDataError,
      // allStatsDataErrorString
      // playersData,
      teamsData,
      nbaNews
} = this.state;
    
    return (
      <div className="App">
      <header className="App-header">
        <img src={ballImage} className="Ball-logo" alt="basketball" />
        <p>
          <strong>Hoops</strong>
        </p>
        
      </header>
      <Navbar/>
      <React.Fragment>
      <section className="container">
          <section className="nbaStyle">
          <h3><strong>NBA Teams</strong></h3>
          <Teams allTeamsData = {teamsData}/>
          </section>
          {/* <section>
          
          </section> */}
         
        
        
          <Switch>
          <Route exact path='/' render={(props) => <Home {...props} nbaNews={this.state.nbaNews} />}/>
          <Route exact path='/teams' render={(props) => <Teams {...props} allTeamsData={teamsData} />}/>
          <Route exact path='/team/:teamID' render={(props) => <TeamDetails {...props} allTeamsData={teamsData} />}/>
          <Route exact path='/nbaNews' render={(props) => <NbaNews {...props} allNBANews={nbaNews} />}/>
          <Route path="/VideoPlayer" component={VideoPlayer} />
          </Switch>
          
          </section>
          </React.Fragment>
    </div>
    );
  }
}

export default App;
