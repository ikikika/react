import * as React from "react";

export class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "", // when we type in input field, value will be stored here
      tasks: [] // when we hit add button, currentTask will be appended here
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>TS List</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Task Name" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
