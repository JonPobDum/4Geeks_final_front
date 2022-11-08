import React, {useState, useEffect} from 'react';
import { Player } from '../component/Audioplayer/player';
import "../../styles/player.css"

export function Applayer() {
  const [songs] = useState([
    {
      title: "Relax",
      artist: "Alpha 8 - 13 Hz",
      src: "https://freebinaural.com/wp-content/uploads/2020/10/DNA-Repair-Frequency-_-Healing-Theta-Meditation-_-Cell-Regeneration-w_-Binaural-Beats.mp3"
    },

    {
      title: "Sleep",
      artist: "Deltha 0, 4Hz",
      src: "https://freebinaural.com/wp-content/uploads/2020/09/Delta-Binaural-Beat.mp3"
    },

    {
      title: "Meditation",
      artist: "13 - 32Hz",
      src: "https://freebinaural.com/wp-content/uploads/2020/12/Beta-12.5Hz-Free-Binaural-Beats.mp3"
    },
    
    {
      title: "Focus",
      artist: "Gamma 32 - 100Hz",
      src: "https://freebinaural.com/wp-content/uploads/2020/10/Awake-_-Gamma-Wave-Binaural-Beats-_-Focus-Memory-Studying-_-Relaxation-Healing.mp3"
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

  return (  <div className="App position-absolute">
                  <div className="row img-fluid">
                        <div className="col d-none d-lg-block col-sm-12 col-md-5 col-xl-6 mt-4">
                              <img className="img-fluid bg2 position-relative" width="800px" src="https://www.naturline.com/wp-content/uploads/2018/04/Binaural-Beats.jpg"></img>
                        </div>
                        <div className="col img-2 position-relative">
                                <Player className=""
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
