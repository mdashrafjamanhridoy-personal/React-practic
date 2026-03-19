import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [filter, setFilter] = useState("all");

    return (
        <TodoContext.Provider 
          value={{
            todo, setTodo,
            todolist, setTodolist,
            editMode, setEditMode,
            editTodo, setEditTodo,
            filter, setFilter
          }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;