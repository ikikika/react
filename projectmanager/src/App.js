import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects test="Hello World"/>
      </div>
    );
  }
}

export default App;
