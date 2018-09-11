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

  handleIncrement = () => {
    console.log('increment clicked', this);
  }

  render() {

    return (
      <div>
        <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
