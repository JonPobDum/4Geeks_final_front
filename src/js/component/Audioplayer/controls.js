import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


/* c-player--controls: distancia los controles 
className="skip-btn": es el boton de cancion anterior
*/

export function Controls(props) {
    return (
        <div className="c-player--controls"> 
            <button className="skip-btnbtn btn-outline-dark no-border" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn btn btn-outline-dark no-border" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn btn btn-outline-dark no-border" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}