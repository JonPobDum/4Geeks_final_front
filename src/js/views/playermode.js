import React, {useState, useEffect} from 'react';
import { Player } from '../component/player';

export function Applayer() {
  const [songs] = useState([
    {
      title: "Kuppa's Castle",
      artist: "Kuppa",
      img_src: "https://c.tenor.com/jJSbgYDDKaIAAAAC/fire-breath-kuppa.gif",
      src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "https://soundcloud.com/luis-luna-359139215/3-horas-frecuencia-binaural-para-la-paz-mental-la-salud-y-la-alegria?si=7163972420174741949f46471244c533&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharinghttps://soundcloud.com/luis-luna-359139215/3-horas-frecuencia-binaural-para-la-paz-mental-la-salud-y-la-alegria?si=4811906928a249ac925ae74737960d6b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp33"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
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
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}
