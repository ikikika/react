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
        <NavBar />
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
