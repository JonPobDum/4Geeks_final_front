import React, {useState, useEffect} from 'react';
import { Player } from '../component/Audioplayer/player';
import "../../styles/player.css"

export function Applayer() {
  const [songs] = useState([
    {
      title: "Gamma",
      artist: "T. Schürge",
      src: "https://freebinaural.com/wp-content/uploads/2020/10/Awake-_-Gamma-Wave-Binaural-Beats-_-Focus-Memory-Studying-_-Relaxation-Healing.mp3"
    },

    {
      title: "Alpha",
      artist: "Creative Commons",
      src: "https://freebinaural.com/wp-content/uploads/2020/10/DNA-Repair-Frequency-_-Healing-Theta-Meditation-_-Cell-Regeneration-w_-Binaural-Beats.mp3"
    },

    {
      title: "Delta",
      artist: "T. Schürge",
      src: "https://freebinaural.com/wp-content/uploads/2020/09/Delta-Binaural-Beat.mp3"
    },

    {
      title: "Beta",
      artist: "T. Schürge",
      src: "https://freebinaural.com/wp-content/uploads/2020/12/Beta-12.5Hz-Free-Binaural-Beats.mp3"
    },
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
