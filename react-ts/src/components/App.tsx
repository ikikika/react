import * as React from "react";

export class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "", // when we type in input field, value will be stored here
      tasks: [] // when we hit add button, currentTask will be appended here
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks, // spread operator, means take everything from tasks array and put it here
        this.state.currentTask
      ]
    });
  }

  renderTasks() {
    return this.state.tasks.map((task: string, index: number) => {
      return <div key={index}>{task}</div>;
    });
  }

  render() {
    console.log(this.state); //for debugging so we can see our state
    return (
      <div>
        <h1>TS List</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Task Name"
            value={this.state.currentTask}
            onChange={e => this.setState({ currentTask: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <section>{this.renderTasks()}</section>
      </div>
    );
  }
}

interface IState {
  currentTask: string;
  tasks: Array<string>;
}
