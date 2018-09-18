import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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

  render(){
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-success btn-lg m-2"
        >Reset</button>
        { this.state.counters.map( counter =>
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counter={counter}
            />
          )
        }
      </div>
    );
  }
}

export default Counters;
