import guid from 'guid';
import { createStore } from 'redux';

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

const defaultState = {
  todos,
  showDone: true
};

const reducer = (state = defaultState, action) => {
  console.log(action);
  const { type, todo, showDone } = action; //extract value from action
    if (type === `SUBMIT_TODO`) {
        state = {
            ... state, //object rest state operator
            todos: [...state.todos,todo]
        }
    }

    if (type === `UPDATE_TODO`) {
        state = {
            ...state,
            todos:state.todos.map(_todo=>_todo.id === todo.id ? todo : _todo)
        }
    }

    
  return state;
};

export default () => createStore(reducer);
