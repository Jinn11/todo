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
        
      <label htmlFor="hhh">Task:</label>
      <input onChange={this.handleChange} name="" type="teccc" placeholder=""/>
      <form onSubmit ={this.addItem}>
<div className='container'>
      <label htmlFor="hhh">One:</label>
      <input onChange={this.handleChange} name="" type="teccc" placeholder=""/>
      <button type ="submit">OK</button>
</div>
      <label htmlFor="hhh">Two:</label>
      <input onChange={this.handleChange} name="" type="teccc" placeholder=""/>
      <button type ="submit">OK</button>

   <div className='container'>  
      <label htmlFor="hhh">Three:</label>
      <input onChange={this.handleChange} name="" type="teccc" placeholder=""/>
      <button type ="submit">OK</button>
   </div>  

<div className='container'>
  
      <label htmlFor="hhh">Four:</label>
      <input onChange={this.handleChange} name="" type="teccc" placeholder=""/>
      <button type ="submit">OK</button>
 </div>     
    </form>
</div>
     )
}
}


export default TodoList;
