import * as React from "react";

export class App extends React.Component<{}, {}> {
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
