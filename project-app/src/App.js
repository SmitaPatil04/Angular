
import './App.css';
import Header from "./component/header";
import Footer from "./component/footer";
import Todos from './component/todos';
import Prog from "./logicWork/prog";
import Prog1 from "./logicWork/prog1";
import React, { useState } from 'react';



function App() {
const onDelete=(data)=>{
    console.log('deleted successfully',data);
    setTodos(todos.filter((a)=>{return a!==data}))
  }

  const [todos, setTodos] = useState(
  [
    {
      srno:1,
      name:"Smita patil",
      position:"Engg",
      salary:50000,

    },
    {
      srno:2,
      name:"Sneha Ingawle",
      position:"Engg",
      salary:50000,

    },
    {
      srno:3,
      name:"Rahul Zaa",
      position:"Engg",
      salary:50000,

    },
    {
      srno:4,
      name:"Rishi Barange",
      position:"Engg",
      salary:50000,

    },
    {
      srno:5,
      name:"Pooja Gupta",
      position:"Engg",
      salary:50000,

    },
    {
      srno:6,
      name:"Arti Gupta",
      position:"Engg",
      salary:50000,

    },
    {
      srno:7,
      name:"Uma patil",
      position:"Engg",
      salary:50000,

    }
  ]
  ) 
  return (
    <>
    <h1 className='bg-primary'>smi</h1>
    <h2 >smi</h2>
    <Header title='49' search={false}/>
    <Todos todos={todos}  onDelete={onDelete}/>
    <Footer/>
    <Prog/>
    <Prog1/>
    
    
    </>
  );
}

export default App;
