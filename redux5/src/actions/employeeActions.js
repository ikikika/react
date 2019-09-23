import { FETCH_EMPLOYEES } from "./types";

export const fetchEmployees = () => {
  return async dispatch => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json)
      .then(employees =>
        dispatch({ type: FETCH_EMPLOYEES, payload: employees })
      );
  };
};
