/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://via.placeholder.com/150"
              alt="image"
              className="avatar-image"
            />
            <hr />
            <p>ABC | DF| GHI</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
