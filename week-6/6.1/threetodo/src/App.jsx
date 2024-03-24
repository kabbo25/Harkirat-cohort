import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Learn React',
            date: '2024-03-24', // Sample date
            description: 'Learn the basics of React.', // Sample description
        },
        {
            id: 2,
            title: 'Learn Node',
            date: '2024-03-25', // Sample date
            description: 'Study Node.js for backend development.', // Sample description
        },
        {
            id: 3,
            title: 'Learn Express',
            date: '2024-03-26', // Sample date
            description: 'Explore Express.js for building RESTful APIs.', // Sample description
        },
    ]);

    const addTodo = (todo) => {
        if (!todo.title.trim()) return; // Prevent adding empty todos
        setTodos([...todos, { ...todo, id: new Date().getTime() }]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>Date: {todo.date}</p>
                        <p>Description: {todo.description}</p>
                    </li>
                ))}
            </ul>
            <AddTodo onAddTodo={addTodo} />
        </div>
    );
};

const AddTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ title: '', date: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.title.trim()) return; // Prevent adding empty todos
        onAddTodo(todo);
        setTodo({ title: '', date: '', description: '' }); // Clear input fields after adding todo
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={todo.title}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Enter Description"
                    value={todo.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default App;
