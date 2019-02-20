import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Exercises from "./Components/Exercises";

import { muscles, exercises } from "./Components/store";

class App extends Component {
  state = {
    exercises
  };

  getExercisesbyMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesbyMuscles();
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;