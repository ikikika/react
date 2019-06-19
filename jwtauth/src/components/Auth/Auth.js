import axios from "axios";

const Auth = {
  isAuthenticated: false,
  register(newUser) {
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
  },
  login(user) {
    return axios
      .post("api/login", {
        email: user.email,
        password: user.password
      })
      .then(res => {
        localStorage.setItem("userToken", res.data.token);
        this.isAuthenticated = true;
        return { success: true, data: res };
      })
      .catch(err => {
        return { success: false, data: err.response };
      });
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return axios
      .get("http://localhost:8000/api/profile", {
        headers: { Authorization: `Bearer ${localStorage.userToken}` }
      })
      .then(res => {
        // console.log(res);
        this.isAuthenticated = true;
        return { success: true, data: res.data };
      })
      .catch(err => {
        // console.log(err.response);
        this.isAuthenticated = false;
        return { success: false, data: err.response };
      });
  }
};
export default Auth;
