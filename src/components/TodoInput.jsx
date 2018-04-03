import React from 'react';
import { connect } from 'react-redux';
import guid from 'guid';

const TodoInputComponent = ({handleSubmitInput})=>(
    <div>
        <form onSubmit={handleSubmitInput}>
            <input type="text" placeholder="Add a new todo item"/>
        </form>
    </div>
);

const mapDispatchToProps = (dispatch)=>({ //passed to store and processed by reducer
    handleSubmitInput(e){
        e.preventDefault();
        let input = e.target.elements[0]; //get first element of target
        let todo = {id:guid.raw(),text:input.value,done:false}; //define new todo based on what the element is, and set done to false cos havent done yet
        dispatch({type:"SUBMIT_TODO",todo}); // then dispatch action
        input.value = ""; //finally reset the field
    }
});

export default connect(null, mapDispatchToProps)(TodoInputComponent);
