import React, { Component } from "react";
import trophyPic from './images/premier_league_trophy.jpg'

class History extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>
          Discover the origins and history of the top tier of English football
        </h1> <br></br>
        <img src={trophyPic} className="responsive" alt="football" />
        
        <h2>Founded in 1992 - 28 Years Ago</h2>
        <br></br>
        <div>
          <p>A total of 49 clubs have played in the Premier League since its
          inception, with Arsenal, Chelsea, Everton, Liverpool, Man United, and
          Spurs participating in every campaign to date. Brighton & Hove Albion
          and Huddersfield Town are the most recent clubs to have played in the
          league. At the end of each season, the bottom three clubs are
          relegated, with three promoted clubs from the Football League's
          Championship replacing them. The only exception to this was in the
          1994/95 season when the League decided to reduce the number of clubs
          to 20. As a result, Crystal Palace joined Norwich, Leicester City and
          Ipswich in being relegated from the Premier League at the end of the
          1994/95 season, with only two clubs replacing them from Division One,
          as the Championship was known then.</p> 
          <br></br>
          <p>Between 1993 and 2016, each season
          of the Premier League had a title sponsor. From the 1993/94 season, it
          was known as the FA Carling Premiership, before the sponsorship
          changed in 2001 to Barclaycard until 2004. The title of the
          competition then changed to the FA Barclays Premiership. It became the
          Barclays Premier League from the 2007/08 campaign. The 2015/16 season
          was the final one having a title sponsor, with the competition
          becoming the Premier League from 2016/17. </p> 
          <br></br>
          <p>Manchester United were the
          first winners of the competition, finishing 10 points clear of Aston
          Villa, and have been PL champions on 13 occasions in total. Blackburn
          won the title once, in 1994/95, while Arsenal triumphed in 1997/98,
          2001/02 and 2003/04. Chelsea became the fourth club to win the PL, in
          2004/05, and have since gone on to claim the title four more times:
          2005/06, 2009/10, 2014/15 and 2016/17. Man City have won the title
          four times, securing the trophy in dramatic fashion in 2011/12 with a
          goal in stoppage time of the final day, and again in 2013/14.
          Leicester became the sixth club to win the Premier League, completing
          a remarkable title triumph a year after a late but successful battle
          against relegation.</p>
          <br></br>
            <p>The most successful manager in the competition is
          Sir Alex Ferguson, who has guided Manchester United to all their
          Premier League successes. He also holds the record for being the
          longest-serving manager in the Premier League, spending 21 years at
          Old Trafford since its inception in 1992 before retiring at the end of
          the 2012/13 season.
          </p>
        </div>
      </div>
    );
  }
}

export default History;
