import { AUTH_USER } from "./types";
import axios from "axios";

export const signup = ({ email, password }) => {
  return (dispatch) => {
    axios.post("http://localhost:3090/signup", { email, password });
  };
};
