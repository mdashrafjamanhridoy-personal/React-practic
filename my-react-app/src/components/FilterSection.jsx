import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const FilterSection = () => {
    const { filter, setFilter } = useContext(TodoContext);

    return (
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        </select>
    );
};

export default FilterSection;
