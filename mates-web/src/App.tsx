import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArchivePage from './pages/ArchivePage'
import CommentsPage from './pages/CommentsPage'
import CurrentTasksPage from './pages/CurrentTasksPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/tasks" element={<CurrentTasksPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
