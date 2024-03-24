import  { useState } from 'react';
import { Todo } from './todo.jsx';

const App = () => {
    const [todos, setTodos] = useState([]);


        // Fetch todos from JSONPlaceholder API
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    return (
        <Todo todos={todos} ></Todo>
    );
};

export default App;
