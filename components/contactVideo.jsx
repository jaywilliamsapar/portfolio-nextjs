import React, { useEffect } from 'react';
import sourceVideo from 'modal.mp4';

const AutoPlayVideo = () => {
 useEffect(() => {
    const video = document.getElementById('video');
    video.autoplay = true;
    video.load();

    return () => {
      video.autoplay = false;
    };
 }, []);

 return (
    <div>
      <video id="video" width="320" height="240" controls>
        <source src={sourceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
 );
};

export default AutoPlayVideo;