import React, { useState } from 'react'
import './App.css'


 function App() {
     const [newTodo, setNewTodo] = useState("")
      const [Todos, setTodos] = useState([
          
      ])
     function handleNewTodoChange(e) {
         e.preventDefault()
         setNewTodo(e.target.value)

     }
     function handleNewTodo(e) {
         e.preventDefault()
         if (newTodo === '') return
         setTodos([...Todos, {id: Date.now(), text: newTodo}])
       e.target.reset()
        }
         function removeTodo(id) {
             setTodos(Todos.filter((Todo) =>Todo.id !=id))
         }




     return (
        <div className="App">
        <h1 className="h1">Todo List</h1>
        <form onSubmit ={handleNewTodo}>
            <input className="input" placeholder="Your Todo..." onChange={handleNewTodoChange} />
            <ul className="todolist">
                {Todos.map((Todo)=>(
                    <li className="li" key={Todo.id}>
                      <span> {Todo.text}</span>
                        <a href="#" onClick={()=>removeTodo(Todo.id)}>X</a>
                    </li>
                ))}
            </ul>
        </form>
   
        </div>
      );
    }
export default App;