import React from 'react';
import TodoList from './TodoList';
import FilterSection from './FilterSection';

const TodoSection = () => {
    return (
        <div>
            <FilterSection />
            <TodoList />
        </div>
    );
};

export default TodoSection;