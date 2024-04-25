import React from 'react';

const TodoContext = React.createContext({
    todo: [
        { id: 1, title: 'Learn React', completed: false },
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
    updateTodo: (id, todo) => {},
});

export function useTodos() {
    return React.useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider; 
