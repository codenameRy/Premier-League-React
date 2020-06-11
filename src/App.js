import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
// import ballImage from './nba_ball.png';
import './App.css';
import Axios from 'axios';
// import Teams from './components/Teams'
// import TeamDetails from  './components/TeamDetails'
import SoccerNews from './components/SoccerNews';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer'
import BackgroundVideo from './components/BackgroundVideo'
import SoccerTeams from './components/SoccerTeams'
import SoccerPlayers from './components/SoccerPlayers'
import History from './components/History'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'


// Premier League News - News API - Update June 10, 2020 
let newsBaseURL = 'https://gnews.io/api/v3/'
let newEndPoint = 'search?q=premier+league&token=9d69881169213520621ce1ebe0779d82'
let newEndPointAbbrv = newEndPoint

// Premier League News - News API - Outdated from May 22, 2020
// let newsBaseURL = 'https://newsapi.org/'
// let newEndPoint = 'v2/everything?q=premierleague&language=en&sortBy=popularity&apiKey=38407b35f95c48359a0c4b5337e10220'
// let newEndPointAbbrv = newEndPoint

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      SoccerNews :[],
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
            
            //API Call for news
            Axios.get(newsBaseURL+newEndPointAbbrv)
          .then(responseNews => {
            console.log(responseNews)  
            this.setState({
              SoccerNews: responseNews.data.articles
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
    


  //Step 1 -API Call
  //STep 2 - Add'l APIs calls
  //Step 3 - Display content
  //function for 3 API calls and load within componentDidMount

 //API Endpoint Function

  
  render() {
    const {
      SoccerNews,
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
          <Route exact path='/SoccerNews' render={(props) => <SoccerNews {...props} allSoccerNews={SoccerNews} />}/>
          <Route exact path='/SoccerTeams' render={(props) => <SoccerTeams {...props} soccerAPI={soccerAPI} />}/>
          <Route exact path='/SoccerTeams/:playerID' render={(props) => <SoccerPlayers {...props} soccerAPI={soccerAPI} />}/>
          <Route path="/VideoPlayer" component={VideoPlayer} />
          <Route path="/History" component={History} />
          <Route path="/About" component={About} />
          <Route path='/home' render={(props) => <Home {...props} SoccerNews={SoccerNews} />}/>
          <Route path ='/' render={(props) => <Home {...props} SoccerNews={SoccerNews} />}/>
          
          </Switch>
          
          </section>
          </React.Fragment>
    </div>
    );
  }
}

export default App;
