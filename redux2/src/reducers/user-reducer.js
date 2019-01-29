export default function userReducer(state = "", action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "updateUser":
      return action.payload;
  }
  return state;
}
