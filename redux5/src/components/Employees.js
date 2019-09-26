import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEmployees } from "../actions/employeeActions";

class Employees extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const employeeItems = this.props.employees ? (
      this.props.employees.map(employee => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.employee_name}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="2">No Employees</td>
      </tr>
    );
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{employeeItems}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  employees: store.employees.items
});

const mapDispatchToProps = { fetchEmployees };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
