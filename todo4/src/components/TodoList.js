import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ listItems, deleteItem }) => {
  const todoList =
    listItems.length === 0 ? (
      <p>No more tasks</p>
    ) : (
      listItems.map(todo => {
        return (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.content} />
            <ListItemSecondaryAction onClick={() => deleteItem(todo.id)}>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })
    );
  return todoList;
};
export default TodoList;
