import * as React from "react";

export class App extends React.Component<{}, {}> {
  //in <>, first is props, second is state

  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "",
      tasks: []
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>React Typescript</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter task here" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
