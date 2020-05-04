import React from 'react';
import classes from './BackgroundVideo.module.css';


const BackgroundVideo = () => {
    const videoSource = "https://pixabay.com/videos/download/video-1467_source.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1 className={classes.Header}>Premier League</h1>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo