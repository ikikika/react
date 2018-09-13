import React, {Component} from 'react';

class Counter extends Component {

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: '25px',
    fontWeight: 'bold'
  }

  handleIncrement = (argument) => {
    console.log(argument);
    this.setState({ count: this.state.count+1}); //tells react that r updating the state, react figure out what part of state is changed, bring DOM in sync with virtual DOM
  }

  render() {

    return (
      <div>
        <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement({argument:1}) }
          className="btn btn-secondary btn-lg"
          >Increment</button>
        <ul>
          { this.state.tags.map( tag => <li key={tag}>{tag}</li> )}
        </ul>
      </div>
    );
  }

  formatCount(){
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

}
export default Counter;
