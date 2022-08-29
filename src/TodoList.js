import React from 'react';
import './TodoList.css';

function TodoList(props) {
     

  return (
    <>
    <div className='list'>
     <div className='delete_btn' onClick={() =>{
          props.onSelect(props.id)
     } }></div>
     <li>{props.text}</li>
    </div>
    </>
  );
}

export default TodoList