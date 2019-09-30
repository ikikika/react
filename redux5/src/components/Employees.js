import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEmployees } from "../actions/employeeActions";
import EmployeeForm from "./EmployeeForm";

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
          <td>{employee.employee_age}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3">No Employees</td>
      </tr>
    );
    return (
      <div>
        <EmployeeForm />
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
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
