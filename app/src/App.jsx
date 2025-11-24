import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Hello World!
      </h1>

      <button
        onClick={() => setCount(c => c + 1)}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
      >
        Clique AQUI
      </button>

      <h2 className="text-3xl font-semibold mt-4 text-gray-700">
        {count}
      </h2>
    </div>
  )
}

export default App
