import React, {useState, useEffect} from 'react';
import "../../styles/MusicPlayer.css"

export const MusicPlayer = () => (
    return <div className="phone">
            <div className="player">
                <div className="wavesurfer">
                    <div className="recordplayer">
                        <div className="recordplayer__disc">
                            <div className="recordplayer__disc-stripe1"></div>
                            <div className="recordplayer__disc-stripe2"></div>
                        </div>
                    </div>
                    <div className="artist__image">
                        <div className="artist__image-url"></div>
                    </div>

                    <div className="time">
                        <span className="time__minutes"></span>
                        <span>:</span>
                        <span className="time__seconds"></span>
                    </div>
                    <div className="progress">
                        <div className="progress__button"></div>
                        <div className="progress__indicator"></div>
                    </div>
                </div>

                <div id="wavesurfer" className="wavesurfer__elem"></div>

                <div className="artist__name">
                    <p>Moonlight Serenade</p>
                    <h1>Glenn Miller</h1>
                    <div className="love">&#9825;</div>
                    <div className="share"></div>
                </div>

        <div className="controls">
            <button className="button__prev"></button>
            <button id="play" className="button__play load">
                    <span className="button__play-iconplay"></span>
                    <span className="button__play-iconpause"></span>
                    <span className="button__loader"></span>
            </button>
            <button className="button__next"></button> 
        </div>
    </div>
    <div className="hint">Press play</div>
)
