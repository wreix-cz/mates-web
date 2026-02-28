import { BookOpen, Archive, MessageSquare, Info, Calendar, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Page = 'home' | 'current' | 'archive' | 'comments' | 'about';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="logo-handwritten text-6xl md:text-8xl text-gray-900 mb-4">
              MATES
            </h1>
            <div className="w-24 h-0.5 bg-blue-700 mx-auto"></div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Matematická korespondenční soutěž
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Pro žáky 6. a 7. tříd základních škol
          </p>
          
          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Soutěž organizovaná studenty Gymnázia Polička. Řešení úloh zasílejte poštou 
            nebo elektronicky. Každý ročník obsahuje čtyři série úloh různé obtížnosti.
          </p>
          
          {/* Current Year Info */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-6 py-3 rounded-lg mb-10">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Aktuální ročník: 2025/2026</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => onNavigate('current')}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 h-auto"
            >
              <FileText className="w-4 h-4 mr-2" />
              Aktuální zadání
            </Button>
            <Button 
              onClick={() => onNavigate('archive')}
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-6 py-3 h-auto"
            >
              <Archive className="w-4 h-4 mr-2" />
              Archiv
            </Button>
            <Button 
              onClick={() => onNavigate('about')}
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-6 py-3 h-auto"
            >
              <Info className="w-4 h-4 mr-2" />
              O soutěži
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Čtyři série ročně
                </h3>
                <p className="text-gray-600 text-sm">
                  Každý ročník obsahuje čtyři série úloh s různou obtížností. 
                  Řešení odevzdávejte vždy do uvedeného termínu.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Organizují studenti
                </h3>
                <p className="text-gray-600 text-sm">
                  Soutěž vznikla a funguje pod záštitou studentů Gymnázia Polička. 
                  Úlohy tvoří a hodnotí sami studenti.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Komentáře a dotazy
                </h3>
                <p className="text-gray-600 text-sm">
                  Máte dotaz k úloze nebo soutěži? Napište nám prostřednictvím 
                  jednoduchého formuláře bez nutnosti registrace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Rychlé odkazy
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={() => onNavigate('current')}
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Aktuální zadání</h3>
                <p className="text-sm text-gray-500">Stáhněte si aktuální sérii úloh</p>
              </div>
            </button>
            
            <button
              onClick={() => onNavigate('archive')}
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Archive className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Archiv</h3>
                <p className="text-sm text-gray-500">Zadání a výsledky předchozích ročníků</p>
              </div>
            </button>
            
            <button
              onClick={() => onNavigate('comments')}
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Komentáře</h3>
                <p className="text-sm text-gray-500">Napište nám zprávu nebo dotaz</p>
              </div>
            </button>
            
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-teal-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">O soutěži</h3>
                <p className="text-sm text-gray-500">Informace o projektu a kontakt</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
