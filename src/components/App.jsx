import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = ({todos,showDone})=>(
    <div>
        <h1>
            To do list
        </h1>
        <TodoList />
        <TodoInput />
    </div>
);

export default App;
