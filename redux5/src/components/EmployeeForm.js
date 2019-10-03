import React, { Component } from "react";
import { connect } from "react-redux";

import { createEmployee } from "../actions/employeeActions";

class EmployeeForm extends Component {
  state = {
    name: "aaa",
    salary: 0,
    age: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const employee = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age
    };
    this.props.createEmployee(employee);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="number"
            name="salary"
            value={this.state.salary}
            onChange={this.handleChange}
            placeholder="Salary"
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { createEmployee };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeForm);
