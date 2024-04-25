import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
	const [todo, setTodo] = useState([]);
	
	const addTodo = (newTodo) => {
		newTodo = {id: Date.now(), ...newTodo};
		setTodo((prevTodo) => {
			return [newTodo, ...prevTodo];
		});
	}
	const deleteTodo = (id) => {
		setTodo((prevTodo) => prevTodo.filter((todoItem) => todoItem.id !== id));
	}
	const updateTodo = (id, newTodo) => {
		setTodo((prevTodo) => prevTodo.map((todoItem) => todoItem.id === id ? newTodo : todoItem));
	}
	const toggleTodo = (id) => {
		setTodo((prevTodo) => prevTodo.map(prevTodoItem => prevTodoItem.id !== id ? prevTodoItem : { ...prevTodoItem, completed: !prevTodoItem.completed}));
	}

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos && todos.length > 0) {
			setTodo(todos);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todo));
	}, [todo]);

	return (
		<TodoProvider
			value={{ todo, addTodo, deleteTodo, updateTodo, toggleTodo }}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						<TodoForm />	
					</div>
					<div className="flex flex-wrap gap-y-3">
						{
							todo.map((todoItem) => (
								<div key={todoItem.id}>
									<TodoItem todo={todoItem} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
