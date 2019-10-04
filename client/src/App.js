import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import './App.css';
import HomePage from './components/HomePage.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
