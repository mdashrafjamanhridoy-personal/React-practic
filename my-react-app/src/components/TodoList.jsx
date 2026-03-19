import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
    const { todolist, setTodolist, filter, setEditMode, setTodo, setEditTodo } = useContext(TodoContext);

    const filterTodoList = todolist.filter((todo)=>{
        if (filter === "completed") {
            return todo.completed === true;
        }else if (filter === "uncompleted") {
            return todo.completed === false;
        }else {
            return true;
        };
    });

    const updateHandelar = (item) => {
        const updateTodoList = todolist.map( (todo) => {
            if (todo.id === item.id) {
                return {...todo, completed:!todo.completed}
            }
            return {...todo}
        });
        setTodolist(updateTodoList);
    };



    const editHandler = (todo) => {
        setEditMode(true)
        setTodo(todo.text)
        setEditTodo(todo)
    };

    return (
        <ul>
        {filterTodoList.map((item) => (
            <li key={item.id}>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => updateHandelar(item)}
            />
            <span>{item.text}</span>
            <button onClick={() => editHandler(item)}>Edit</button>
            </li>
        ))}
        </ul>
    );
};

export default TodoList;
