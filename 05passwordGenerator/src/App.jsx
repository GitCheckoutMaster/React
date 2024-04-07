import { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
	// useStates
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(8);
	const [isNumber, setIsNumber] = useState(false);
	const [isCharacter, setIsCharacter] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const generatePassword = useCallback(() => {
		let pass = "",
			str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (isNumber) {
			str += "0123456789";
		}
		if (isCharacter) {
			str += "!@#$%^&*?";
		}

		for (let i = 0; i < length; i++) {
			let idx = Math.floor(Math.random() * str.length + 1);
			pass += str[idx];
		}

		setPassword(pass);
	}, [isNumber, isCharacter, length, setPassword]);

	useEffect(() => {
		generatePassword();
	}, [length, isNumber, isCharacter]);

	return (
		<div className="w-full max-w-md mx-auto gap-3 bg-gray-400 shadow-md rounded-lg px-5 py-3 my-7">
			<h1 className="text-center text-4xl pb-4">Password Generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<label className="px-2">Password: </label>
				<input
					type="text"
					className="outline-none rounded-sm"
					placeholder="password"
					value={password}
					readOnly
				/>
				<button
					className="bg-yellow-800 px-2 rounded-sm"
					onClick={() => {
						window.navigator.clipboard.writeText(password);
						setIsCopied(true)
					}}
				>
					{isCopied ? "Copied!" : "Copy"}
				</button>
			</div>
			<div className="flex gap-x-4">
				<div className="flex gap-x-1 items-center">
					<label>Length:{length}</label>
					<input
						type="range"
						min={6}
						max={15}
						value={length}
						onChange={(e) => {
							setLength(e.target.value);
							setIsCopied(false);
						}}
						className="cursor-pointer"
					/>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						onChange={() => {
							setIsNumber((pre) => !pre);
							setIsCopied(false);
						}}
					/>
					<label>Numbers</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						onChange={() => {
							setIsCharacter((pre) => !pre);
							setIsCopied(false);
						}}
					/>
					<label>Character</label>
				</div>
			</div>
		</div>
	);
}

export default App;
