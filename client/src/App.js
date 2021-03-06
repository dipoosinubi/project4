import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import TeamPage from './components/TeamPage.js'
import MerchandiseList from './components/MechandiseList.js'
import ScheduleList from './components/ScheduleList.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/team/:id" component={TeamPage} />
            <Route exact path="/merchandise" component={MerchandiseList} />
            <Route exact path="/Schedule" component={ScheduleList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
