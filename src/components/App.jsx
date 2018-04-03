import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import ShowDoneToggle from './ShowDoneToggle';

const App = ({todos,showDone})=>(
    <div>
        <h1>
            To do list
        </h1>
        <TodoList />
        <TodoInput />
        <ShowDoneToggle />
    </div>
);

export default App;
