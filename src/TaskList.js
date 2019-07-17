import React from 'react';

const TaskList =(props)=>{
   console.log(props)
    return(
        <ul>
            {props.todoArray.length ?
            props.todoArray.map((todo,index)=>{
            return(<li key={index}>{todo}<button id={index}onClick={(event)=>props.deleteT(index,event)} type ="text">Delete</button></li>)
            }):
        <li></li>
        }
        </ul>
    )
}

export default TaskList