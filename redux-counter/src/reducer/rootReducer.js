const initialStore = {
  todoItems: [
    {
      id: 1,
      title: "hahahaha",
      completed: false,
    },
    {
      id: 2,
      title: "hehehehe",
      completed: true,
    },
  ],
};

export default function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {};
      const d = new Date();
      const n = d.getMilliseconds();
      newTodo.id = n;
      newTodo.title = action.payload;
      newTodo.completed = false;
      state.todoItems.push(newTodo);
      return {
        ...state,
        todoItems: state.todoItems,
      };
    default:
      return state;
  }
}
