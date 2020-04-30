import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  render() {
    return (
      <div className='player-wrapper'>
      <h3><strong>Videos</strong></h3>
        <ReactPlayer
        className='react-player' 
        url="https://www.youtube.com/watch?v=fTxCvQMdb3I" 
        controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=Y0aADEygLKQ"
          controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=tjRCk0JVzfc"
          controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=bOjUD-DyNBA"
          controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=BsL7pjxko7Q"
          controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=zNWBz4GCiUo"
          controls
        />
        <br></br>
        <ReactPlayer
        className='react-player'
          url="https://www.youtube.com/watch?v=4T6x9Gjpa-U"
          controls
        />
      </div>
    );
  }
}

export default VideoPlayer;


