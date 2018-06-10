import React, { Component } from 'react';
import './App.css';
import Rooms from './components/Rooms';
import People from './components/People'
import Children from './components/Children';
import Group from 'react-icons/lib/fa/group'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><Group/> Choose the number of People</p>
        <Rooms/>
        <hr/>
        <People/>
        <hr/>
        <Children/>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;
