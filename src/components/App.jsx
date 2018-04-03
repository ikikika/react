import React from 'react';
import TodoList from './TodoList';

const App = ({todos,showDone})=>(
    <div>
        <h1>
            To do list
        </h1>
        <TodoList />
    </div>
);

export default App;
