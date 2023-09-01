import React from 'react'

const todositem = ({data, onDelete}) => {
  return (
    <div>
  <h3>{data.srno}</h3>
  <h3>{data.name}</h3>
  <h3>{data.salary}</h3>
  <h3>{data.position}</h3>
  <button className='btn-success' onClick={()=>{onDelete(data)}}>delete</button>
      
    </div>
  )
}

export default todositem
