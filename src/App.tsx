import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CurrentTasksPage } from './pages/CurrentTasksPage';
import { ArchivePage } from './pages/ArchivePage';
import { CommentsPage } from './pages/CommentsPage';
import { AboutPage } from './pages/AboutPage';

type Page = 'home' | 'current' | 'archive' | 'comments' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'current':
        return <CurrentTasksPage />;
      case 'archive':
        return <ArchivePage />;
      case 'comments':
        return <CommentsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
