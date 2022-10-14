import React, {useState, useEffect} from 'react';
import { Player } from '../component/player';
import { Audiobars } from '../component/audiobars';
import "../../styles/player.css"
export function Applayer() {
  const [songs] = useState([
    {
      title: "SoundHelix Song",
      artist: "T. Schürge",
      img_src: "./images/song-1.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    },
    {
      title: "SoundHelix Song 12",
      artist: "T. Schürge",
      img_src: "./images/song-2.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "SoundHelix Song 15",
      artist: "T. Schürge",
      img_src: "./images/song-3.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    {
      title: "SoundHelix Song 16",
      artist: "T. Schürge",
      img_src: "./images/song-4.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <body>
    
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
    </body>
  );
}
