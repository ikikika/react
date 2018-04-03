import React from 'react';
import { connect } from 'react-redux';
import guid from 'guid';

const TodoInputComponent = ()=>(
    <div>
        <form >
            <input type="text" placeholder="Add a new todo item"/>
        </form>
    </div>
);

export default connect()(TodoInputComponent);
