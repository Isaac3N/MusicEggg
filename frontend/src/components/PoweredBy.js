import React from 'react'
import spotify from '../assets/spotify.png'
import soundcloud from '../assets/soundcloud.jpg'
import applemusic from '../assets/applemusic.jpg'
import deezer from '../assets/deezer.png'
import './PoweredBy.css'

const PoweredBy = () => {
    return (
        <div className='row'>
            <h3>Powered by: </h3> &nbsp; &nbsp;
            <div>
                <a href = 'https://www.spotify.com' target='_blank' rel="noreferrer">
                    <img src={spotify} alt="Spotify" style={{width:"150px"}}/>
                </a>
            </div>
            <div>
                <a href = 'https://soundcloud.com/' target='_blank' rel="noreferrer">
                    <img src={soundcloud} alt="soundcloud" style={{width:"150px"}}/>
                </a>
            </div>
            <div>
                <a href = 'https://www.apple.com/' target='_blank'  rel="noreferrer">
                    <img src={applemusic} alt="applemusic" style={{width:"150px"}}/>
                </a>
            </div>
            <div>
                <a href = 'https://www.deezer.com/en/' target='_blank' rel="noreferrer">
                    <img src={deezer} alt="deezer" style={{width:"150px"}}/>
                </a>
            </div>
        </div>
    )
}

export default PoweredBy
