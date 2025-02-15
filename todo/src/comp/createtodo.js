import axios from 'axios';
import React, { useState,useEffect } from 'react';

function Createtodo() {
    const [todo, settodo] = useState('');
    const [todos, setTodos] = useState([]); // State to manage list of todos
    // const [todos, setTodos] = useState([]);
 

    useEffect(() => {
        // Fetch todos when the component mounts
        axios
            .get('http://localhost:5010/todo/gettodo',{ withCredentials: true })  // Add `withCredentials` to send session cookie
            .then((response) => {
                setTodos(response.data.data); // Store the todos in state
                console.log(response);
                
            },[])
            .catch((err) => {
                // setError('Error fetching todos');
                console.error(err);
            });
    },[createdata1]);

    function getwork(e) {
        console.log(e.target.value);
        settodo(e.target.value);
        
    }

    function createdata1() {
        axios
            .post('http://localhost:5010/todo/createtodo', { text: todo }, { withCredentials: true })
            .then((response) => {
                console.log(response);
                setTodos([...todos, { text: todo }]); // Add new todo to the list
                settodo(''); // Clear the input field after adding
            })
            .catch((err) => {
                console.error('Error creating todo:', err);
            });
    }

    return (
        <div>
            <input
                placeholder="Enter todo here"
                value={todo}
                onChange={getwork}
            />
            <button onClick={createdata1}>Add</button>
            <div>
         <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>{todo.text}</li>  // Display the todo text
                ))}
            </ul>
        </div>
  
      
    </div>
           
        </div>
    );
}

export default Createtodo;


