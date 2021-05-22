import React from 'react'
import './JoinEgg.css'
import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";

const JoinEgg = () => {
    return (
        <div className='hero-container'>
            
            <Link to=''>
                <h3 className ='top-left'>Music Egg</h3>
            </Link>
            <div class = 'container'>
                <div className ='joinRoom'>
                    <h4>Join an Egg </h4>
                    <TextField id="outlined-search"
                        label="Join Egg" 
                        type="search" 
                        variant="outlined" />
                    <div className="btn btn-one">
                        <span>Join Egg</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default JoinEgg