import * as React from "react";

export class App extends React.Component<{}, {}> {
  //in <>, first is props, second is state
  render() {
    return (
      <div>
        <h1>React Typescript</h1>
        <form action="">
          <input type="text" placeholder="Enter task here" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
