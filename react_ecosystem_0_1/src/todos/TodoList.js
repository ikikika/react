import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { loadTodos, removeTodoRequest, markTodoAsComplete } from "./thunks";
import {
  getTodos,
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from "./selectors";

import "./TodoList.css";

const BigRedText = styled.div`
  font-size: 48px;
  color: #ff0000;
`;

const TodoList = ({
  incompleteTodos,
  completedTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <BigRedText>I'm a styled component</BigRedText>
      <NewTodoForm />
      <h3>Incomplete</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  todos: getTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
