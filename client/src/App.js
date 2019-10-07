import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage.js'
import TeamPage from './components/TeamPage.js'
import MerchandiseList from './components/MechandiseList.js'
import ScheduleList from './components/ScheduleList.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/merchandise/:id" component={TeamPage} />
          <Route exact path="/merchandise" component={MerchandiseList} />
          <Route exact path="/Schedule" component={ScheduleList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
