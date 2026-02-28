import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="logo-handwritten text-xl text-blue-800 mb-1">MATES</p>
            <p className="text-sm text-gray-500">
              Matematická korespondenční soutěž
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:matesgympol@gmail.com" 
              className="hover:text-blue-700 transition-colors"
            >
              matesgympol@gmail.com
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              Organizuje{' '}
              <a 
                href="https://www.gympolicka.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Gymnázium Polička
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              © 2026 MATES
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
