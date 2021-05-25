import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CreateEgg from './CreateEgg';


const Egg = (props) => {
    const[title, setTitle] = useState('Strange Monkey')
    const [checked, setChecked] = useState(false)
    const[service, setService] = useState('spotify')
    const [isHost, setIsHost] = useState(false)
    const[skip, setSkip] = useState(2)
    const[code, setCode] = useState(null)
    const[settings, setSettings] = useState(false)
    
    const eggCode = props.match.params.eggCode // match stores the information of how we got into the component using router
    const clearRoomCode=()=>{
      setCode({code: null})
    }
    

    const getEggDetails=()=> {
        fetch("/api/get-room" + "?code=" + eggCode)
          .then((response) => {
            if (!response.ok) {
              clearRoomCode()
              props.history.push("/");
            }
            return response.json();
          })
          .then((data) => {
            setTitle(
              data.name_of_room
            )
            setChecked(
                data.guest_can_pause,
            )
            setIsHost(
                data.is_host,
            )
            setService(
                data.streaming_service, 
            )
            setSkip(
                data.votes_to_skip, 
            )
          });
        
      }
      getEggDetails()
      
      const leaveButtonPressed=()=>{
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };
        fetch("/api/leave-room", requestOptions)
        .then((_response) => {
          clearRoomCode()
          props.history.push("/");
        });
      }
      const updateSettings=(value)=>{
        setSettings(
          {
            settings: value, 
          }
        )
      }
      const renderSettings=()=>{
        return (
          <div>
            <CreateEgg
              update={true}
              votesToSkip = {skip}
              guestCanPause = {checked}
              code = {code}
              updateCallBack= {null}
            />
            <Button variant="contained" color="secondary" onClick={()=> updateSettings(false)}>
                    Close
            </Button>
          </div>
          )
      }

      const showSettingsButton=()=>{
        return(
          <Button variant="contained" color="primary" onClick={()=> updateSettings(true)}>
                Settings
          </Button>
        )
      }

    if (settings){
      return renderSettings()
    }
    else {
      return (
          <div>
              <h3>{eggCode}</h3>
              <p>Title: {title}</p>
              <p>guest can pause: {checked.toString()}</p>
              <p>Votes Required to skip: {skip}</p>
              <p>Service used: {service}</p>
              <p>Host: {isHost.toString()}</p>
              {isHost? showSettingsButton(): null}
              <Button variant="contained" color="secondary" to="/" component={Link} onClick={leaveButtonPressed}>
                  Leave Room 
              </Button>
          </div>
      )}
}

export default Egg
