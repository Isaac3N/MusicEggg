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
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CreateEgg = () => {
    //material ui styling 
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        }, // texfield styling
        formControl: {
            margin: theme.spacing(1),
            minWidth:120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2), 
        }, 
      }));
    const classes = useStyles()

    //checkbox with material ui
    const [checked, setChecked] = useState(false)

    //streaming service dropdown menu
    const[service, setService] = useState('spotify')


    //event handlers
    const handleGuestCanPause = (event)=>{
        setChecked(event.target.checked)
    }
    const handleStreamingService = (event)=> {
        setService(event.target.value)
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
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">on {service}</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={service}
                            onChange={handleStreamingService}
                            >
                            <MenuItem value='spotify'>Spotify</MenuItem>
                            <MenuItem value='Apple Music'>Apple Music</MenuItem>
                            <MenuItem value='SoundCloud'>SoundCloud</MenuItem>
                            <MenuItem value='deezer'>deezer</MenuItem>
                            </Select>
                      </FormControl>
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
