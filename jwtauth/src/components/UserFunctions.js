import axios from "axios";

export const register = newUser => {
  return axios
    .post("api/register", newUser, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = user => {
  return axios
    .post("api/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("userToken", res.data.token);
      return { success: true, data: res };
    })
    .catch(err => {
      return { success: false, data: err.response };
    });
};

export const getProfile = () => {
  return axios
    .get("api/profile", {
      headers: { Authorization: `Bearer ${localStorage.userToken}` }
    })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
