import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/pages/Home'
import CreateEgg from './components/pages/CreateEgg'
import Egg from './components/pages/Egg';
import JoinEgg from './components/pages/JoinEgg';
import React, { useEffect, useState } from 'react';

function App() {
  const[code, setCode] = useState(null)
  useEffect(()=>{
    async function fetchData(){
      fetch('http://localhost:8000/api/user-in-room')
      .then((response)=> response.json())
      .then((data)=>{
        setCode({
          code: data.code, 
        })
      })
    }
    fetchData()
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} render={()=>{
            return code ? (<Redirect to={`/egg/${code}`}/>) : (Home())
          }}/>
          <Route path='/CreateEgg' component={CreateEgg}/>
          <Route path='/JoinEgg' component={JoinEgg}/>
          <Route path='/egg/:eggCode' component={Egg}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
