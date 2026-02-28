import { useState } from 'react';
import { Send, User, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Comment {
  id: number;
  author: string;
  message: string;
  date: string;
}

const sampleComments: Comment[] = [
  {
    id: 1,
    author: 'Petra N.',
    message: 'Dobrý den, chtěla bych se zeptat, zda je možné odevzdat řešení i elektronicky? Děkuji.',
    date: '5. února 2026',
  },
  {
    id: 2,
    author: 'Mates Team',
    message: 'Dobrý den, bohužel elektronické odevzdání není možné. Řešení prosím zasílejte poštou nebo odevzdejte osobně na Matesáckém dopoledni.',
    date: '6. února 2026',
  },
  {
    id: 3,
    author: 'Tomáš K.',
    message: 'Kdy prosím bude zveřejněna 4. série?',
    date: '10. února 2026',
  },
];

export function CommentsPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual submission logic
    setSubmitted(true);
    setName('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Komentáře a zprávy
          </h1>
          <p className="text-gray-600">
            Máte dotaz k soutěži nebo úloze? Napište nám. Není nutná registrace.
          </p>
        </div>

        {/* Submission Form */}
        <Card className="mb-10 border-gray-200">
          <CardHeader className="pb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-700" />
              Nový komentář
            </h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Jméno
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Vaše jméno nebo přezdívka"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Zpráva
                </Label>
                <Textarea
                  id="message"
                  placeholder="Napište svůj dotaz nebo komentář..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white"
                disabled={!name.trim() || !message.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Odeslat
              </Button>
            </form>

            {submitted && (
              <Alert className="mt-4 border-green-200 bg-green-50">
                <AlertDescription className="text-green-800">
                  Děkujeme za váš komentář! Bude zveřejněn po schváleni.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Předchozí komentáře
          </h2>

          {sampleComments.map((comment) => (
            <Card key={comment.id} className="border-gray-200">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">
                        {comment.author}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {comment.message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Upozornění:</strong> Komentáře jsou moderovány. Nevhodné příspěvky 
            nebudou zveřejněny. Pro naléhavé dotazy nás prosím kontaktujte přímo na{' '}
            <a 
              href="mailto:matesgympol@gmail.com" 
              className="underline hover:no-underline"
            >
              matesgympol@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
