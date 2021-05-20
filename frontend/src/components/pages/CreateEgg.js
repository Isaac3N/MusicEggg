import React from 'react'
import './CreateEgg.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact.js'
import '../../components/button.css'
import RadioButton from '../../components/RadioButton'
import '../../components/toggle.scss'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const CreateEgg = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      const classes = useStyles()
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
                        <form className = {classes.root} noValidate autoComplete='off'>
                            <li className="roomName">Give your room a name so people would know what room they are joining 
                                <TextField id="standard-basic" label="Strange monkey &#58664;" />   
                            </li>
                        </form>
                        <li className="createRoomList">Guest Can have control to play/pause songs?
                            <label class="switch-wrap">
                            <input type="checkbox" />
                            <div class="switch"></div>
                            </label> 
                        </li>
                        <li className="createRoomList">Choose a Streaming service:
                            
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
