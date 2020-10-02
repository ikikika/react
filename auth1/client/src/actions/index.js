import { AUTH_USER } from "./types";
import axios from "axios";

export const signup = ({ email, password }) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3090/signup", {
      email,
      password,
    });

    dispatch({ type: AUTH_USER, payload: response.data.token });
  };
};
