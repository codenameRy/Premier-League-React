import React, { Component } from "react";
import ReactPlayer from "react-player";


class VideoPlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <br></br>
        <h3>
          <strong>Videos</strong>
        </h3>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=j4NabRNkS6s"
          
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=UMcJAXwWaf0"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=7j72MeoL47o"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=4Dk7eYoj5GI"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=rsRzMz2iM5U"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=Kpcb4K0OVEU"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=Jq7GVHUV0eA"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=9YGyP4ObC-U"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=E0i5JMdVHx8"
          controls
        />
        <br></br>
        
        <div>
          <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/channel/UCG5qGWdu8nIRZqJ_GgDwQ-w" }>
          <h2>More Videos on YouTube</h2>
          </a>
        </div>
        <br></br>
      </div>
    );
  }
}

export default VideoPlayer;
