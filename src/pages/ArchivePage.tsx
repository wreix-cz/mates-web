function ArchivePage() {
  const items = [
    { id: 1, title: 'První příspěvek', date: '2024-01-15' },
    { id: 2, title: 'Druhý příspěvek', date: '2024-02-20' },
    { id: 3, title: 'Třetí příspěvek', date: '2024-03-10' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Archiv</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600">Název</th>
              <th className="px-6 py-3 text-left text-gray-600">Datum</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ArchivePage
