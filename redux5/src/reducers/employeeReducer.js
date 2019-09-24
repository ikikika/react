import { FETCH_EMPLOYEES } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
