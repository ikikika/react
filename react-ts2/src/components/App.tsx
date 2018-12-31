import * as React from "react";

export class App extends React.Component<IProps, {}> {
  //in <>, first is props, second is state
  render() {
    return <h1>Helllllllloooo {this.props.name}</h1>;
  }
}

interface IProps {
  name: string;
}
