import React, {useState, useEffect} from 'react'
import './CreateEgg.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact.js'
import '../../components/button.css'
import RadioButton from '../../components/RadioButton'
import '../../components/toggle.scss'
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles';

const CreateEgg = () => {
    //text field with material ui
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    const classes = useStyles()

    //checkbox with material ui
    const [checked, setChecked] = useState(false)
    const handleGuestCanPause = (event)=>{
        setChecked(event.target.checked)
    }

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
                            <Checkbox
                            checked = {checked}
                            onChange = {handleGuestCanPause}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
            
                        </li>
                        <li className="createRoomList">Choose a Streaming service:
                            
                        </li>
                    </ul>
                    <div className="btn btn-one">
                        <span>Create an Egg</span>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default CreateEgg
