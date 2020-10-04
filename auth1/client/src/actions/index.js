import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = ({ email, password }, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3090/signup", {
        email,
        password,
      });

      dispatch({ type: AUTH_USER, payload: response.data.token });
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email in use" });
    }
  };
};
