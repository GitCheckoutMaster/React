/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(15);

	const countUp = () => {
		if (count < 20) {
			setCount(count+1);
		}
	}
	const countDown = () => {
		if (count > 0) {
			setCount(count-1);
		}
	}

    return (
		<>
			<h1>Counter Project to understand hooks</h1>
			<h2>Counter: {count}</h2>
			<button onClick={countUp}> Up </button>
			<button onClick={countDown}> Down </button>
		</>
	);
}

export default App;
