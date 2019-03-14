import React, { Component } from "react";

class Todos extends Component {
  state = { todos: ["do this", "do that"] };
  render() {
    return <h1>TOdos Container</h1>;
  }
}

export default Todos;
