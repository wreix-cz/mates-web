import { Download, Calendar, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function CurrentTasksPage() {
  return (
    <div className="animate-in fade-in duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aktuální zadání
          </h1>
          <p className="text-gray-600">
            Zde najdete aktuální sérii úloh pro probíhající ročník soutěže.
          </p>
        </div>

        {/* Current Series Info */}
        <Card className="mb-8 border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  3. série - Ročník 2025/2026
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Zveřejněno: 6. února 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Termín: 25. března 2026</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-700" />
              Ke stažení
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-700 hover:bg-blue-800 text-white"
                asChild
              >
                <a href="#" download>
                  <Download className="w-4 h-4 mr-2" />
                  Stáhnout zadání (PDF)
                </a>
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
                asChild
              >
                <a href="#" download>
                  <Download className="w-4 h-4 mr-2" />
                  Stáhnout řešení (PDF)
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Submission Alert */}
        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <AlertCircle className="w-4 h-4 text-amber-700" />
          <AlertDescription className="text-amber-800">
            Řešení můžete odevzdat osobně na Matesáckém dopoledni (25. 3. 2026) 
            nebo zaslat poštou na adresu školy. Elektronické odevzdání není možné.
          </AlertDescription>
        </Alert>

        {/* Tasks List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Úlohy 3. série
          </h2>

          {/* Task 1 */}
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">
                Úloha 1
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">
                V této úloze se budeme zabývat vlastnostmi číselných posloupností. 
                Uvažujme aritmetickou posloupnost, kde první člen je 5 a diference je 3. 
                Určete součet prvních dvaceti členů této posloupnosti.
              </p>
            </CardContent>
          </Card>

          {/* Task 2 */}
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">
                Úloha 2
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">
                Obdélník má strany v poměru 3:4. Jeho úhlopříčka měří 20 cm. 
                Vypočtěte obvod a obsah tohoto obdélníka.
              </p>
            </CardContent>
          </Card>

          {/* Task 3 */}
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">
                Úloha 3
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">
                Tři pracovníci mohou dokončit zakázku za 8, 10 a 12 hodin. 
                Jak dlouho by jim trvalo dokončit tuto zakázku, pokud by pracovali společně?
              </p>
            </CardContent>
          </Card>

          {/* Task 4 */}
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">
                Úloha 4
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">
                Dokažte, že pro libovolné reálné číslo x platí: x² + 1 ≥ 2x.
              </p>
            </CardContent>
          </Card>

          {/* Task 5 */}
          <Card className="border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-700">
                Úloha 5 (bonusová)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 leading-relaxed">
                Najděte všechna přirozená čísla n, pro která je číslo n² + n + 41 prvočíslem.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Scoring Info */}
        <Card className="mt-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Hodnocení</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Každá úloha má maximální bodové hodnocení 6 bodů</li>
              <li>• Bonusová úloha se hodnotí 10 body</li>
              <li>• Částečné body jsou možné za nedokončené řešení</li>
              <li>• Správný postup je důležitější než výsledek</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
