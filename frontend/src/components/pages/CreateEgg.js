import React from 'react'
import './CreateEgg.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact.js'
import '../../components/button.css'
import RadioButton from '../../components/RadioButton'
import '../../components/toggle.scss'

const CreateEgg = () => {
    return (
        <div className='hero-container'>
            <Link to=''>
                <h3 className ='top-left'>Music Egg</h3>
            </Link>
            <div className="container">
                <div className="createRoom">
                    <h3>Create A Room</h3>
                    <p>Create a room to share your music with friends.</p> 
                
                    <ul className='options'>
                        <li>Guest Can have control to play/pause songs?
                            <label class="switch-wrap">
                            <input type="checkbox" />
                            <div class="switch"></div>
                            </label> 
                        </li>
                        <li>Choose a Streaming service:
                            <ul>
                               <RadioButton
                                    id='1'
                                    label='spotify'
                                />
                                <RadioButton
                                    id='2'
                                    label='Deezer'
                                />
                                <RadioButton
                                    id='3'
                                    label='SoundCloud'
                                />
                                <RadioButton
                                    id='4'
                                    label='Apple Music'
                                />
                            </ul>
                        </li>
                    </ul>
                    <div class="btn btn-one">
                        <span>Create an Egg</span>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default CreateEgg
