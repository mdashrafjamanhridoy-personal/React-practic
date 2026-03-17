import React, { useState } from 'react';

const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [filter, setFilter] = useState("all");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo.trim()) {
            alert("Please enter a todo item.");
            return;
        }
        const note = {
            id: Date.now(),
            text: todo,
            completed: false
        }

        setTodolist([note, ...todolist]);
        setTodo("");
    };

    const updateHandelar = (item) => {
        const updateTodoList = todolist.map( (todo) => {
            if (todo.id === item.id) {
                return {...todo, completed:!todo.completed}
            }
            return {...todo}
        });
        setTodolist(updateTodoList);
    };

    const filterTodoList = todolist.filter((todo)=>{
        if (filter === "completed") {
            return todo.completed === true;
        }else if (filter === "uncompleted") {
            return todo.completed === false;
        }else {
            return true;
        }
    })


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Todo App</h2>
                <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
                <button type='submit'>Create</button>
            </form>

            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

            <ul>
                {filterTodoList.map((item) => (
                    
                    <li key={item.id}>
                        <input type="checkbox" checked={item.completed} onChange={() => updateHandelar(item)}/>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;