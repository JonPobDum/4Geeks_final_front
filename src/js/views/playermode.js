import React, {useState, useEffect} from 'react';
import { Player } from '../component/Audioplayer/player';
import "../../styles/player.css"

export function Applayer() {
  const [songs] = useState([
    {
      title: "SoundHelix Song",
      artist: "T. Schürge",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
    },
    {
      title: "SoundHelix Song 12",
      artist: "T. Schürge",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "SoundHelix Song 15",
      artist: "T. Schürge",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
    },
    {
      title: "SoundHelix Song 16",
      artist: "T. Schürge",
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

  return (  <div className="App">
                  <div className="row align-items-stretch main">
                        <div className="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 ">
                              <img className="img-fluid position-relative" src="https://i.ytimg.com/vi/a3H5hr8OLu8/maxresdefault.jpg"></img>
                        </div>
                        <div className="col img-2">
                                <Player className
                                  currentSongIndex={currentSongIndex} 
                                  setCurrentSongIndex={setCurrentSongIndex} 
                                  nextSongIndex={nextSongIndex} 
                                  songs={songs}
                                />
                        </div>
                  </div>
    </div>
    
  );
}
