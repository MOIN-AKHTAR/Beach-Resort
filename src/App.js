import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Room from './pages/Room';
import NotFound from './pages/NotFound'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/room/:slug" component={Room}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
