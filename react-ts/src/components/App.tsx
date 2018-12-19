import * as React from "react";

export class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "", // when we type in input field, value will be stored here
      tasks: [] // when we hit add button, currentTask will be appended here
    };
  }

  public handleSubmit(e: any): void {
    // return nothing
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks, // spread operator, means take everything from tasks array and put it here
        {
          id: this._timeInMilliseconds(), // unique id
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
  }

  public deleteTask(id: number): void {
    const filteredTasks: Array<ITask> = this.state.tasks.filter(
      // filter creates a new array with all the tasks assigned to it by the function
      (task: ITask) => task.id !== id // removes the id passed in
    );
    this.setState({ tasks: filteredTasks });
  }

  public toggleDone(index: number): void {
    let task: ITask[] = this.state.tasks.splice(index, 1); // take out the task that was clicked
    task[0].completed = !task[0].completed; // change boolean value of task that was singled out
    const currentTask: ITask[] = [...this.state.tasks, ...task]; // put back updated task
    this.setState({ tasks: currentTask }); // set to state
  }

  public renderTasks(): JSX.Element[] {
    // return JSX array
    return this.state.tasks.map((task: ITask, index: number) => {
      return (
        <div key={task.id}>
          <span>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Del</button>
          <button onClick={() => this.toggleDone(index)}>Done</button>
        </div>
      );
    });
  }

  public render(): JSX.Element {
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

  private _timeInMilliseconds(): number {
    const date: Date = new Date();
    return date.getTime();
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
