import { useState } from 'react'
import { Send } from 'lucide-react'

function CommentsPage() {
  const [comments, setComments] = useState([
    { id: 1, author: 'Jan', text: 'Skvělý web!', date: '2024-01-15' },
    { id: 2, author: 'Petr', text: 'Díky za info.', date: '2024-02-20' },
  ])
  const [newComment, setNewComment] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && author.trim()) {
      setComments([...comments, {
        id: Date.now(),
        author,
        text: newComment,
        date: new Date().toISOString().split('T')[0]
      }])
      setNewComment('')
      setAuthor('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Komentáře</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Přidat komentář</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Vaše jméno"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Váš komentář"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Send size={18} /> Odeslat
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-blue-600">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsPage
