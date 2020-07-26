import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

function reducer(state, action) {
  // reducer function gets called everytime we call dispatch
  // whatever we pass to dispatch is populated inside action variable
  // state is just whatever current state of application is
  // action.type equal hello
  // action.payload.x equal 3

  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true,
        jobs: [],
      };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        // jobs: action.payload.jobs,
        jobs: action.payload,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  //   dispatch({ type: "hello", payload: { x: 3 } });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    const cancelToken = axios.CancelToken.source();
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: res.data,
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({
          type: ACTIONS.ERROR,
          payload: { error: e },
        });
      });

    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);

  return state;
}
