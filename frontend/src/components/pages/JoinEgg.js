import React, { useState } from 'react'
import './JoinEgg.css'
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";

const JoinEgg = ({history}) => {
    const [code, setCode] = useState()
    const handleCodeInput = (event) =>{
        setCode(event.target.value)
    }
    const [error, setError] = useState('')
    const handleButttonPressed = ()=> {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: code,
            }),
          };
          fetch("http://localhost:8000/api/join-room", requestOptions)
            .then((response) => {
                if(response.ok){
                    history.push(`/egg/${code}`)
                }else {
                    setError({error: 'Room not found'})
                }
            }).catch ((error)=>{
                console.log(error)
            })
    
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
    } // to change the default from a contolled input to an uncontrolled one 
    return (
        <div className='hero-container'>
            <Link to=''>
                <h3 className ='top-left'>Music Egg</h3>
            </Link>
            <div className = 'container'>
                <div className ='joinRoom'>
                    <h4>Join an Egg </h4>
                    <TextField id="outlined-name"
                        value = {code}
                        onSubmit={handleSubmit}
                        onChange = {handleCodeInput}
                        placeholder = 'Enter an Egg Code'
                        label="Egg Code" 
                        type="search" 
                        />
                    <div className="btn btn-one"  onClick={handleButttonPressed} >
                        <span>Join Egg</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinEgg