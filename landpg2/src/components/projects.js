import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <div>this is react</div>;
    } else if (this.state.activeTab === 1) {
      return <div>this is angular</div>;
    } else if (this.state.activeTab === 2) {
      return <div>this is php</div>;
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>PHP</Tab>
        </Tabs>

        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
