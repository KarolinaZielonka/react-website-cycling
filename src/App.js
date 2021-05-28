import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Home from './components/pages/home'
import Teams from './components/pages/teams'
import Riders from './components/pages/riders'
import Race from './components/pages/race'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/teams' exact component={Teams}/>
        <Route path='/riders' exact component={Riders}/>
        <Route path='/race/' exact component={Race}/>
        <Route path='/race/:a([A-Za-z]+)' exact component={Race}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
