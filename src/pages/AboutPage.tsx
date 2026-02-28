import { Mail, MapPin, Users, BookOpen, Award, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutPage() {
  return (
    <div className="animate-in fade-in duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O soutěži
          </h1>
          <p className="text-gray-600">
            Informace o projektu MATES a kontaktní údaje.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Main Content - 2 columns */}
          <div className="md:col-span-2 space-y-6">
            {/* History Section */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <History className="w-5 h-5 text-blue-700" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Historie projektu
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Soutěž MATES vznikla před několika lety jako studentský projekt na Gymnáziu v Poličce. 
                  Cílem bylo vytvořit příležitost pro žáky základních škol, jak si procvičit matematické 
                  úlohy a zároveň zažít soutěžní atmosféru.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Postupně se soutěž rozrostla a dnes se jí účastní desítky žáků z širokého okolí. 
                  Každý ročník přináší čtyři série úloh různé obtížnosti, které pokrývají učivo 
                  6. a 7. třídy základní školy.
                </p>
              </CardContent>
            </Card>

            {/* Organizers Section */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-700" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Organizátoři
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Soutěž organizují studenti Gymnázia Polička pod vedením pedagogů. 
                  Úlohy tvoří, hodnotí a výsledky zpracovávají sami studenti, 
                  což dává projektu unikátní atmosféru.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Každý rok se do organizace zapojuje nová skupina studentů, 
                  kteří přinášejí čerstvé nápady a zajišťují kontinuitu projektu.
                </p>
              </CardContent>
            </Card>

            {/* How It Works Section */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-700" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Jak soutěž funguje
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Stáhněte si zadání aktuální série z webu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Vyřešte úlohy a svá řešení zapište na papír</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>Odešlete řešení poštou nebo odevzdejte osobně</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <span>Po vyhodnocení obdržíte zpětnou vazbu a body</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Contact Info */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Kontakt
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a 
                        href="mailto:matesgympol@gmail.com"
                        className="text-blue-700 hover:underline"
                      >
                        matesgympol@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Adresa</p>
                      <p className="text-gray-700">
                        Gymnázium Polička<br />
                        Smetanova 394<br />
                        572 01 Polička
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-blue-50/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Pro koho je soutěž určena
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                    Žáci 6. tříd ZŠ
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                    Žáci 7. tříd ZŠ
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Ostatní zájemci (mimo soutěž)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Důležité termíny 2025/2026
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>1. série:</span>
                    <span className="font-medium">říjen 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2. série:</span>
                    <span className="font-medium">prosinec 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3. série:</span>
                    <span className="font-medium text-red-600">únor 2026</span>
                  </li>
                  <li className="flex justify-between">
                    <span>4. série:</span>
                    <span className="font-medium">duben 2026</span>
                  </li>
                  <li className="flex justify-between border-t pt-2 mt-2">
                    <span>Matesácké dopoledne:</span>
                    <span className="font-medium text-blue-700">25. 3. 2026</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* School Info */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-2">Soutěž pořádá</p>
          <a 
            href="https://www.gympolicka.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-900 hover:text-blue-700 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-700 text-white rounded-lg flex items-center justify-center text-xl font-bold">
              G
            </div>
            <div className="text-left">
              <p className="font-semibold">Gymnázium Polička</p>
              <p className="text-sm text-gray-500">Cesta k vysoké škole</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
