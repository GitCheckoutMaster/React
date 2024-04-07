import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
      <div
          className="w-full h-screen duration-1000"
          style={{ backgroundColor: color }}
      >
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white gap-3">
              <button
                onClick={() => setColor("red")}
                className="outline-none px-4 bg-red-400 rounded-lg"
              >
                Red
              </button>
              <button
                onClick={() => setColor("blue")}
                className="outline-none px-4 bg-blue-400 rounded-lg"
              >
                Blue
              </button>
              <button
                onClick={() => setColor("green")}
                className="outline-none px-4 bg-green-400 rounded-lg"
              >
                Green
              </button>
          </div>
      </div>
  );
}

export default App
