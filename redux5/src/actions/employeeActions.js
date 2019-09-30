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

export const createEmployee = data => {
  return async dispatch => {
    try {
      fetch("http://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
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
    } catch (err) {
      console.log("here");
      console.log(err);
    }
  };
};
