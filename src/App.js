import React, { Component } from 'react';
import TaskList from './TaskList'
class Todo extends Component{

constructor(){
  super();
  this.state={
    todo:[],
    CurrentToDo:"",
  }
}

handleChange=event=>{
 //console.log( event.target.value)
 this.setState({
   CurrentToDo:event.target.value,
 })//we want to set the currentToDo on state to the event.target.value & placing curentTOdo
}
addItem=(event)=>{
  event.preventDefault();
  //we want to add the this.state.CurrentToDo value to the todos array;
if(this.state.CurrentToDo !==  ""){
  this.setState(
   { todo: [...this.state.todo, this.state.CurrentToDo], CurrentToDo:""}
  )
}
}

deleteT =(index,event)=>{
const result = this.state.todo.filter((todo,index) => index != event.target.id)
this.setState({
  todo:result
});
}

  render(){
  
    return (
      <div>
      <form onSubmit ={this.addItem}>  
      <label htmlFor="T">TASK_NAME:</label>
      <input onChange={this.handleChange} name="T" type="teccc" placeholder=""/>
      <button type ="Submit">OK</button>
    </form>
    <TaskList todoArray ={this.state.todo} deleteT={this.deleteT}/></div>
    )
  }
}

export default Todo;
