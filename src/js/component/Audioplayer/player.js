import React, {useState, useRef, useEffect} from 'react'
import { Controls } from './controls';
import { Details } from './details';
import { Audiobars } from './audiobars';
import "../../../styles/audiobars.css"
import "../../../styles/play.css"
import "../../../styles/player.css"

export function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        // className="c-player": es la caja del reproductor
       
        <div className="c-player">
            
            <audio className="title" src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls className="control" isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <div className="bars">
                <Audiobars /> 
            </div>
            <p className='text-center'>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            <p className="advice"> ⚠️ Advice: </p>
            <p className="blockquote quote">
            When listening to binaural beats, it's best to sit in a comfortable place free of distractions. 
            Listening to the binaural beat audio  at least 30 minutes each day in your headphones ensures 
            that the rhythm is entrained (has fallen into synchronization) throughout the brain.
            </p>
        </div>
    )
}
