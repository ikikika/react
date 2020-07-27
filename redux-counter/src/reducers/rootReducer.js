const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  // this function takes 2 arguments, state and action
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

export default rootReducer;
