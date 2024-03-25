import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [id, setId] = useState(1);
    const [todo, setTodo] = useState({});

    const handleClick = (e) => {
        const clickedId = parseInt(e.target.value);
        setId(clickedId);
    }

    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todo?id=' + id).then((res) => {
            setTodo(res.data.todo);
        }).catch(error => {
            console.error("Error fetching todo:", error);
            setTodo({}); // Reset todo on error
        });
    }, [id]);

    return (
        <>
            <div>
                <button onClick={handleClick} value={1}>1</button>
                <button onClick={handleClick} value={2}>2</button>
                <button onClick={handleClick} value={3}>3</button>
                <button onClick={handleClick} value={4}>4</button>
            </div>
            <div>
                <TodoRender todo={todo}/>
            </div>
        </>
    );
}

const TodoRender = ({ todo }) => {
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
    );
}

export default App;
