import React, {useState, useEffect} from 'react'

const Egg = ({match}) => {
    const[title, setTitle] = useState('Strange Monkey')
    const [checked, setChecked] = useState(false)
    const[service, setService] = useState('spotify')
    const [ishost, setIshost] = useState(false)
    const eggCode = match.params.eggCode // match stores the information of how we got into the component using router
    
    const getEggDetails=()=> {
        fetch("/api/get-room?code=" + eggCode)
          .then((response) => response.json())
          .then((data) => {
            setTitle(
              data.name_of_room
            )
            setChecked(
                data.guest_can_pause,
            )
            setIshost(
                data.is_host,
            )
            setService(
                data.streaming_service, 
            )
          });
      }
      getEggDetails()

    return (
        <div>
            <h3>{eggCode}</h3>
            <p>Title: {title}</p>
            <p>guest can pause: {checked.toString()}</p>
            <p>Service used: {service}</p>
            <p>Host: {ishost.toString()}</p>
        </div>
    )
}

export default Egg
