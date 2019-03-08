import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://via.placeholder.com/150) center / cover"
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>Lorem ipsum dolor sit amer</CardText>
              <CardActions border>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://via.placeholder.com/150) center / cover"
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>Lorem ipsum dolor sit amer</CardText>
              <CardActions border>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://via.placeholder.com/150) center / cover"
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>Lorem ipsum dolor sit amer</CardText>
              <CardActions border>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
                <Button colored>GIthub</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
        </div>
      );
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

        {/* <Grid>{this.toggleCategories()}</Grid> */}
        <Grid>
          <Cell col={6} tablet={8} shadow={8}>
            6 (8 tablet)
          </Cell>
          <Cell col={4} tablet={6} shadow={8}>
            4 (6 tablet)
          </Cell>
          <Cell col={2} phone={4} shadow={8}>
            2 (4 phone)
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
