import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import guid from 'guid';
const todos = [{
  id: guid.raw(),
  text: "task one",
  done: false
},{
  id: guid.raw(),
  text: "task two",
  done: true
},{
  id: guid.raw(),
  text: "task three",
  done: false
}];


const TodoList = ({_todos = todos})=>(
  <ul>
      {todos
          .map((todo)=>(
          <li>
              {todo.text}

          </li>
      ))}
  </ul>
);


export default TodoList;
