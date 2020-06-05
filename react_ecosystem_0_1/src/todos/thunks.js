import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from "./actions";

export const displayAlert = (text) => {
  alert(text);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const removeThisTodo = await response.json();
    dispatch(removeTodo(removeThisTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const markTodoAsComplete = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      }
    );
    const todo = await response.json();
    dispatch(completeTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
