import React, { useState } from 'react';

const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo.trim()) {
            alert("Please enter a todo item.");
            return;
        }
        const note = {
            id: Date.now(),
            text: todo
        }

        setTodolist([note, ...todolist]);
        setTodo("");
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Todo App</h2>
                <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
                <button type='submit'>Create</button>
            </form>
            <ul>
                {todolist.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    )
}

export default TodoApp;