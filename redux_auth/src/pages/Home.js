import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles";

const Home = (props) => {
  const classes = useStyles();

  const goToDashboardOne = () => {
    props.history.push("/user");
  };

  return (
    <div className={classes.homeRoot}>
      <div className={classes.containerDiv}>
        <Button
          variant="contained"
          onClick={goToDashboardOne}
          size="large"
          className={classes.extraBtnStyle}
          color="primary"
        >
          User
        </Button>
      </div>
    </div>
  );
};

export default Home;
