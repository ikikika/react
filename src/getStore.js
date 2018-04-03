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
  return state;
};

export default () => createStore(reducer);
