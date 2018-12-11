import * as React from "react";

export class App extends React.Component<IProps, {}> {
  render() {
    return <h1>Hihi {this.props.name}</h1>;
  }
}

interface IProps {
  name: string;
}
