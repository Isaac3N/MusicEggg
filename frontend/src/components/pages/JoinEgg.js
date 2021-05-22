import React, { useState } from 'react'
import './JoinEgg.css'
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";

const JoinEgg = () => {
    const [code, setCode] = useState()
    const handleCodeInput = (event) =>{
        setCode(event.target.value)
    }
    const handleButttonPressed = ()=> {
        console.log(code) 
    }
    return (
        <div className='hero-container'>
            <Link to=''>
                <h3 className ='top-left'>Music Egg</h3>
            </Link>
            <div class = 'container'>
                <div className ='joinRoom'>
                    <h4>Join an Egg </h4>
                    <TextField id="outlined-search"
                        value = {code}
                        onChange = {handleCodeInput}
                        placeholder = 'Enter an Egg Code'
                        label="Egg Code" 
                        type="search" 
                        variant="outlined" />
                    <div className="btn btn-one" onClick={handleButttonPressed } >
                        <span>Join Egg</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinEgg