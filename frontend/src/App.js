import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import CreateEgg from './components/pages/CreateEgg'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CreateEgg' component={CreateEgg}/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
