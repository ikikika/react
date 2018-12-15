import * as React from "react";

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>TS List</h1>
        <form>
          <input type="text" placeholder="Task Name" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
