import { useState } from 'react'

function App() {
  let [color, setColor] = useState('bg-white');

  let changeColor = (colorValue) => {
    setColor(colorValue);
  }

  return (
    <>
    <div className={`${color} min-h-screen flex flex-col items-center justify-center transition-colors duration-300`}>
      <h1 className="text-gray-300 text-center text-5xl font-bold mb-4 drop-shadow">Color Changer</h1>
      <h2 className="text-gray-400 text-center text-xl mb-10 drop-shadow">Click on any button to change the background color</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-red-500 hover:bg-red-600 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-red-500")}>Red Color</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-blue-500")}>Blue Color</button>
        <button className="bg-green-500 hover:bg-green-600 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-green-500")}>Green Color</button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-yellow-400")}>Yellow Color</button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-purple-500")}>Purple Color</button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white rounded px-6 py-2 font-semibold shadow transition-transform hover:scale-105" onClick={() => changeColor("bg-gray-500")}>Gray Color</button>
      </div>
    </div>
    </>
  );
}

export default App
