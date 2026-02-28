import { Link } from 'react-router-dom'
import { Home, Info, Archive, MessageCircle, CheckSquare } from 'lucide-react'

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            Mates Web
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Home size={18} /> Domů
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Info size={18} /> O nás
              </Link>
            </li>
            <li>
              <Link to="/archive" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Archive size={18} /> Archiv
              </Link>
            </li>
            <li>
              <Link to="/comments" className="flex items-center gap-2 hover:text-blue-200 transition">
                <MessageCircle size={18} /> Komentáře
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="flex items-center gap-2 hover:text-blue-200 transition">
                <CheckSquare size={18} /> Úkoly
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
