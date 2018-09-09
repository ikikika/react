import React, {Component} from 'react';

class Counter extends Component {

  state = {
    count: 0
  };

  styles = {
    fontSize: '25px',
    fontWeight: 'bold'
  }

  render() {

    return (
      <div>
        <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-lg">Increment</button>
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
