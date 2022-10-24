import React from 'react'

export function Details(props) {
    return (    
        <div className='container'>
            <div className="c-player--details">
                {/* className="details-title" --> título de cancion */}
                <h3 className="details-title">{props.song.title}</h3>
                {/* className="details-title" --> artista de canción */}
                <h4 className="details-artist">{props.song.artist}</h4>
            </div>
        </div>
        
    )
}