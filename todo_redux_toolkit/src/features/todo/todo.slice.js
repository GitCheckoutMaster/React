import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique ids

const initialState = {
    todos: [{
        id: 1,
        text: "hello world!",
        completed: false,
    }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === id) {
                    state.todos[i].text = text;
                    break;
                }
            }
        },
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
