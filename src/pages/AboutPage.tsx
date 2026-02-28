function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">O nás</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          Mates Web je moderní webová aplikace postavená na nejnovějších technologiích:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>React 18</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
