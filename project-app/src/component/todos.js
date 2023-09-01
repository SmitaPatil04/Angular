import React from 'react';
import Todositem from './todositem';

const todos = (props) => {
  return (
    <div className="container">

      <h3>Todos list</h3>
      {/* <Todositem  data={props.todos[4]}/> */}

      {props.todos.map(
        (data)=>{
          return <Todositem  data={data} key={data.srno} onDelete={props.onDelete}/> 
        }
      )

      }
      
     
    </div>
  )
}

export default todos
