import React, { Component } from "react";
import ball from "./images/soccer_ball.png";

class About extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h4>Premier League is single-page application built with React</h4>
        <br></br>
        <h5>
          This works by fetching relevant Premier League soccer news articles
          and player team information to display content within the application.
          The ReactPlayer component was used to generate YouTube video content
          as well.
        </h5>
        <br></br>
        <p>
          <h5>Credit to:</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://apifootball.com"}
          >
            <h5>APIFootball.com</h5>
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.premierleague.com"}
          >
            <h5>PremierLeague.com</h5>
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://newsapi.org"}
          >
            <h5>NewsAPI.org</h5>
          </a>
        </p>
        <div>
          <img src={ball} className="Ball-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default About;
