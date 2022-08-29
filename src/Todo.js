import React from 'react';
import './Todo.css';
import TodoList from './TodoList';

function Todo(props) {

     const [input , setInput] = React.useState("");
     const [items , setItems] = React.useState([]);
     const handleChange = change => {
          setInput( change.target.value)
     };
     const add_todo = () => {
          setItems((prev) =>{
               return [...prev, input]
          })
          setInput('')
     };
     const delete_items = (id) => {
          setItems((prev) => {
               return prev.filter((arrElement , index) => {
                    return index !== id ;
               } )
          })
     }
     
  return (
    <main>
     <input className='input_text' type='text' placeholder='Add Task' name='text' value={input} onChange={handleChange}></input>
     <button  className='btn-grad' onClick={add_todo}  >Add Task</button> 
     <ol>
          {items.map((elements, index) => {
               return <TodoList 
               key={index} 
               id = {index}
               text={elements}
               onSelect ={delete_items}
               />;
          })}
     </ol>
    </main>
  )
}

export default Todo