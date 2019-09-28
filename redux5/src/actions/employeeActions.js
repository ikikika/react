import { FETCH_EMPLOYEES, NEW_EMPLOYEE } from "./types";

export const fetchEmployees = () => {
  return async dispatch => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(employees =>
        dispatch({ type: FETCH_EMPLOYEES, payload: employees })
      );
  };
};

export const createEmployees = data => {
  return async dispatch => {
    fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(employee =>
        dispatch({
          type: NEW_EMPLOYEE,
          payload: employee
        })
      );
  };
};
