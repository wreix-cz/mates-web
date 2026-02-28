import { Download, FileText, Trophy } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

interface YearData {
  year: string;
  series: {
    number: number;
    zadani: string;
    reseni: string;
  }[];
  results: string;
}

const archiveData: YearData[] = [
  {
    year: '2024/2025',
    series: [
      { number: 1, zadani: '#', reseni: '#' },
      { number: 2, zadani: '#', reseni: '#' },
      { number: 3, zadani: '#', reseni: '#' },
      { number: 4, zadani: '#', reseni: '#' },
    ],
    results: '#',
  },
  {
    year: '2023/2024',
    series: [
      { number: 1, zadani: '#', reseni: '#' },
      { number: 2, zadani: '#', reseni: '#' },
      { number: 3, zadani: '#', reseni: '#' },
      { number: 4, zadani: '#', reseni: '#' },
    ],
    results: '#',
  },
  {
    year: '2022/2023',
    series: [
      { number: 1, zadani: '#', reseni: '#' },
      { number: 2, zadani: '#', reseni: '#' },
      { number: 3, zadani: '#', reseni: '#' },
      { number: 4, zadani: '#', reseni: '#' },
    ],
    results: '#',
  },
  {
    year: '2021/2022',
    series: [
      { number: 1, zadani: '#', reseni: '#' },
      { number: 2, zadani: '#', reseni: '#' },
      { number: 3, zadani: '#', reseni: '#' },
      { number: 4, zadani: '#', reseni: '#' },
    ],
    results: '#',
  },
  {
    year: '2020/2021',
    series: [
      { number: 1, zadani: '#', reseni: '#' },
      { number: 2, zadani: '#', reseni: '#' },
      { number: 3, zadani: '#', reseni: '#' },
      { number: 4, zadani: '#', reseni: '#' },
    ],
    results: '#',
  },
];

export function ArchivePage() {
  return (
    <div className="animate-in fade-in duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Archiv
          </h1>
          <p className="text-gray-600">
            Zde najdete zadání a výsledky z předchozích ročníků soutěže.
          </p>
        </div>

        {/* Archive Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {archiveData.map((yearData) => (
            <AccordionItem 
              key={yearData.year} 
              value={yearData.year}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-gray-900">
                    Ročník {yearData.year}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  {/* Series */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                      Zadání a řešení
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {yearData.series.map((serie) => (
                        <Card key={serie.number} className="border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-medium text-gray-900">
                                {serie.number}. série
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <a
                                href={serie.zadani}
                                className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-800 hover:underline"
                              >
                                <FileText className="w-4 h-4" />
                                Zadání
                              </a>
                              <span className="text-gray-300">|</span>
                              <a
                                href={serie.reseni}
                                className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-800 hover:underline"
                              >
                                <Download className="w-4 h-4" />
                                Řešení
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="pt-2">
                    <a
                      href={yearData.results}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
                    >
                      <Trophy className="w-4 h-4" />
                      <span className="font-medium">Celkové výsledky</span>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Note */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Poznámka:</strong> Starší ročníky (před 2020/2021) jsou k dispozici na vyžádání. 
            V případě zájmu nás kontaktujte na{' '}
            <a 
              href="mailto:matesgympol@gmail.com" 
              className="text-blue-700 hover:underline"
            >
              matesgympol@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
