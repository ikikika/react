import React, {Component} from 'react';

class Counter extends Component {

  state = {
    value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: '25px',
    fontWeight: 'bold'
  }

  // handleIncrement = (argument) => {
  //   //console.log(argument);
  //   this.setState({ value: this.state.value+1}); //tells react that r updating the state, react figure out what part of state is changed, bring DOM in sync with virtual DOM
  // }

  //mtd id called after component is updated, we have new state or new props, can companre new with old, if there is change, we cna make ajaz request to get new data from server
  componentDidUpdate( prevProps, prevState){
    console.log(prevProps);
    console.log(prevState);

    if( prevProps.counter.value !== this.props.counter.value ){
      console.log("new diff from old");
      //ajax call to get new data from server
    }
  }

  //called just before component is removed from DOM, react compare virtual DOM with old, figure out if component is removed, call this lifecycle before removing component from dom
  //opportunity to do cleanup of timers/listeners
  componentWillUnmount(){
    console.log("counter unmount");
  }

  render() {
    //console.log('props', this.props); //every react has a property called props
    console.log("counter rendered");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.props.onIncrement(this.props.counter) }
          className="btn btn-secondary btn-lg"
          >Increment</button>
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id) }
          className="btn btn-danger btn-lg m-2">Delete</button>
      </div>
    );
  }

  formatCount(){
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

}
export default Counter;
