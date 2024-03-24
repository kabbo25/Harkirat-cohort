import styled from 'styled-components';
import PropTypes from "prop-types";

const TodoItem = styled.div`
    width: 30vw;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;

    h2 {
        margin-bottom: 5px;
    }

    p {
        margin: 5px 0;
    }
`;

export const Todo = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem key={todo.userId}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                    <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                </TodoItem>
            ))}
        </>
    );
};

Todo.propTypes = {
    dummyTodos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};