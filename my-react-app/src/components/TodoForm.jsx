import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const { todo, setTodo, todolist, setTodolist, editMode, setEditMode, editTodo, setEditTodo } = useContext(TodoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo.trim()) {
            alert("Please enter a todo item.");
            return;
        }

        editMode === true ? updateTodoHandeler():createTodo();
    };

    const createTodo = () => {
        const note = {
            id: Date.now(),
            text: todo,
            completed: false
        }

        setTodolist([note, ...todolist]);
        setTodo("");
    }

    const updateTodoHandeler = () => {
        const updateTodoList = todolist.map((note)=>{
            if (note.id === editTodo.id) {
                return {...note, text:todo}
            };
            return {...note}
        });

        setTodolist(updateTodoList);
        setEditMode(false);
        setTodo("");
        setEditTodo(null)
    };


    return (
        <form onSubmit={handleSubmit}>
        <h2>Todo App</h2>
        <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">{editMode ? "Update" : "Create"}</button>
        </form>
    );
};

export default TodoForm;
