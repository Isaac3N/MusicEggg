import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import CreateEgg from './components/pages/CreateEgg'
import Egg from './components/pages/Egg';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CreateEgg' component={CreateEgg}/>
          <Route path='/egg/:eggCode' component={Egg}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
