import { useState } from 'react'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Vítejte na Mates Web</h1>
      <p className="text-lg text-gray-600 mb-8">
        Toto je hlavní stránka vašeho nového webu postaveného na React a Vite.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Počet kliknutí: {count}
        </button>
      </div>
    </div>
  )
}

export default HomePage
