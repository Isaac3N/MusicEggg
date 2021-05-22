import React, {useState, useEffect} from 'react'

const Egg = ({match}) => {
    const[title, setTitle] = useState('Strange Monkey')
    const [checked, setChecked] = useState(false)
    const[service, setService] = useState('spotify')
    const [ishost, setIshost] = useState(false)
    const eggCode = match.params.eggCode // match stores the information of how we got into the component using router
    return (
        <div>
            <h3>{eggCode}</h3>
            <p>Title: {title}</p>
            <p>checked: {checked}</p>
            <p>Service used: {service}</p>
            <p>Host: {ishost}</p>
        </div>
    )
}

export default Egg
