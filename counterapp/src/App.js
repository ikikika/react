import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ]
  }

  // called only once when component is created. can be used for initialising properties in instant.
  constructor(){
    super();
    console.log("app constructor");
  }

  // called after component is rendered into DOM, perfect place to make ajax calls to get data from server
  componentDidMount(){
    //ajax call
    //this.setState({movies});
    console.log("mounted");
  }

  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters]; //clone state.counters
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleDelete = (counterId) => {
    //console.log('Event handler called', counterId);
    //create new array, call set state method, let react update the state
    //get all counters from coutners in state except the one with id == counterId
    const counters = this.state.counters.filter( c => c.id !== counterId );
    this.setState({ counters: counters});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter( c => c.value > 0 ).length}
        />
        <main className="container">
          <Counters
          counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
