import React from "react";
import { Grid, Paper } from "@material-ui/core";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>Left</Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>Right</Paper>
    </Grid>
  </Grid>
);
