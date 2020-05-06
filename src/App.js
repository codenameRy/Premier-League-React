import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
// import ballImage from './nba_ball.png';
import './App.css';
import Axios from 'axios';
// import Teams from './components/Teams'
// import TeamDetails from  './components/TeamDetails'
import NbaNews from './components/NbaNews';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer'
import BackgroundVideo from './components/BackgroundVideo'
import SoccerTeams from './components/SoccerTeams'
import SoccerPlayers from './components/SoccerPlayers'
import History from './components/History'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'


//Soccer Team Info
let baseURL = 'https://www.balldontlie.io/api/v1/'
let endPoints = { 
  'teams': 'teams',
  'players': 'players',
  'seasonAvg': 'season_averages?player_ids[]=237',
}

//NBA News - News API
let newsBaseURL = 'https://newsapi.org/'
let newEndPoint = 'v2/everything?q=premierleague&language=en&sortBy=popularity&apiKey=38407b35f95c48359a0c4b5337e10220'
let newEndPointAbbrv = newEndPoint

// //New Sports API
// let bballURL = 'https://api-nba-v1.p.rapidapi.com/'
// let bballEndPoints = 'teams/nickName/'

// //3rd Sports API
// let sportsAPI = 'https://api-nba-v1.p.rapidapi.com/'
// let sEndpoint = 'teams'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      teamsData: [],
      nbaNews :[],
      newNBATeam: [],
      soccerAPI: []
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

          //Soccer Teams EndPoint
          let URL = 'https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=5a5136a8e97300f3bf6c932e3dcfe239c20c51661a12794cc263c20f94ef6a8b'
          Axios.get(URL)
            .then((response)=>{
              console.log(response)
            this.setState({
              soccerAPI: response.data
              // soccerPlayers: response.data.players
 
            }) 
          })
          
    } // End on componentDid Mount
            

    /**API ENDPOINT FUNCTIONS */
    
getDataFromEndpoints = (endPoint, params, stateKey) => {
  this.setState({
              [`${stateKey}DataLoading`]: true,
              [`${stateKey}Data`]: [],
              [`${stateKey}DataError`]: null,
          }, () => {
              Axios.get(`${baseURL}${endPoint}`)
              .then(response => {
                // console.log(response)  
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
      // teamsData,
      nbaNews,
      soccerAPI
      } = this.state;
    
    return (
      <div className="App">
      <BackgroundVideo />
      <Navbar/>
      <ScrollToTop/>
      <React.Fragment>
      <section className="container">
       
          <Switch>
          {/* <Route exact path ='/' render={(props) => <Home {...props} nbaNews={nbaNews} />}/> */}
          
          
          
          {/* <Route exact path='/' render={(props) => <Teams {...props} allTeamsData={this.state.teamsData} />}/> */}
          {/* <Route exact path='/teams' render={(props) => <Teams {...props} allTeamsData={teamsData} />}/>
          <Route exact path='/teams/:teamID' render={(props) => <TeamDetails {...props} allTeamsData={teamsData} />}/> */}
          <Route exact path='/nbaNews' render={(props) => <NbaNews {...props} allNBANews={nbaNews} />}/>
          <Route exact path='/SoccerTeams' render={(props) => <SoccerTeams {...props} soccerAPI={soccerAPI} />}/>
          <Route exact path='/SoccerTeams/:playerID' render={(props) => <SoccerPlayers {...props} soccerAPI={soccerAPI} />}/>


          <Route path="/VideoPlayer" component={VideoPlayer} />
          <Route path="/History" component={History} />
          <Route path="/About" component={About} />
          <Route path='/home' render={(props) => <Home {...props} nbaNews={nbaNews} />}/>
          <Route path ='/' render={(props) => <Home {...props} nbaNews={nbaNews} />}/>
          
          </Switch>
          {/* </Router> */}
          {/* </ConnectedRouter> */}
          
          </section>
          </React.Fragment>
    </div>
    );
  }
}

export default App;
