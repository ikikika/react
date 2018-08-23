import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {

  constructor(){
    this.state = {
      projects: [
        {
          title: "Business Wwbsite",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "E-commerce shopping cart",
          category: "Web Development"
        }
      ]
    }
  }

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
