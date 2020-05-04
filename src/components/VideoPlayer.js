import React, { Component } from "react";
import ReactPlayer from "react-player";


class VideoPlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
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
          url="https://www.youtube.com/watch?v=Se-tmvIlauA"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=8HM4wZaitQ0&t=1022s"
          controls
        />
        <br></br>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=jA-y41Na_qk"
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
      </div>
    );
  }
}

export default VideoPlayer;
