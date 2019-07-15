import React, { Component } from 'react';

class TodoList extends Component{

constructor(){
  super();
  this.state={
    todos:[],
    CurrentToDo:"",
  }
}

handleChange=event=>{
 return event.target.value
}
addItem=event=>{
  event.preventDefault();
}

  render(){
    return(
      <div className='container'>
      <form onSubmit ={this.addItem}>
      <label htmlFor="hhh">Type:</label>
      <input onChange={this.handleChange} name="" type="teccc" 
      placeholder=""/>
      <button type ="submit">ok</button>
      </form>
      </div>   
     )
}
}


export default TodoList;
