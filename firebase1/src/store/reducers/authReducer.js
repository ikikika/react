const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login failed");
      return { ...state, authError: "Login failed" };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return state;
    default:
      return { ...state, authError: null };
  }
};

export default authReducer;
