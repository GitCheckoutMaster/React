import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todo.slice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

	return (
        <>
            {
                todos.map((todo) => (
                    <li id={todo.id}>{todo.text}</li>
                ))
            }
        </>
    );
}

export default Todos;
