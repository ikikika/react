import { useReducer } from "react";

function reducer(state, action) {
  // reducer function gets called everytime we call dispatch
  // whatever we pass to dispatch is populated inside action variable
  // state is just whatever current state of application is
  // action.type equal hello
  // action.payload.x equal 3
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  //   dispatch({ type: "hello", payload: { x: 3 } });

  return { jobs: "", loading: "", error: "" };
}
