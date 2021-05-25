import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Egg = (props) => {
    const[title, setTitle] = useState('Strange Monkey')
    const [checked, setChecked] = useState(false)
    const[service, setService] = useState('spotify')
    const [isHost, setIsHost] = useState(false)
    const[skip, setSkip] = useState(2)
    const eggCode = props.match.params.eggCode // match stores the information of how we got into the component using router
    
    const getEggDetails=()=> {
        fetch("/api/get-room" + "?code=" + eggCode)
          .then((response) => {
            if (!response.ok) {
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
          props.history.push("/");
        });
      }

    return (
        <div>
            <h3>{eggCode}</h3>
            <p>Title: {title}</p>
            <p>guest can pause: {checked.toString()}</p>
            <p>Votes Required to skip: {skip}</p>
            <p>Service used: {service}</p>
            <p>Host: {isHost.toString()}</p>
            <Button variant="contained" color="secondary" to="/" component={Link} onClick={leaveButtonPressed}>
                Leave Room 
            </Button>
        </div>
    )
}

export default Egg
