import React from "react";


const src =
"https://static.videezy.com/system/resources/previews/000/044/778/original/200316-GraBlueCircle01.mp4";

const Video = () => {
return (
  <video controls width="100%">
    <source src={src} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
);
};

export default Video;