import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route to="/" component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
