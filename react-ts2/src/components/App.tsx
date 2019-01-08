import * as React from "react";

export class App extends React.Component<{}, IState> {
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

    this.setState({
      //this code resets the state
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  }

  _timeInMilliseconds() {
    const date: Date = new Date();
    return date.getTime();
  }

  renderTasks() {
    return this.state.tasks.map((task: ITask, index: number) => {
      return <div key={index}>{task.value}</div>;
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>React Typescript</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter task here"
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
  tasks: Array<ITask>;
}

interface ITask {
  id: number;
  value: string;
  completed: boolean;
}
