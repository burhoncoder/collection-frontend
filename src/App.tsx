import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	const a = (test: string): number => {
		return Number(test);
	};

	a("sdfasd");

	return (
		<div className="-bottom-0 flex bg-green-50 accent-green-300">
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
