import { FETCH_EMPLOYEES, NEW_EMPLOYEE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_EMPLOYEE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
