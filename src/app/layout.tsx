import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Gyros Agora | Authentisches Gyros in Ihrer Nähe',
  description: 'Traditionelles griechisches Gyros, frisch vom Drehspieß. Besuchen Sie Gyros Agora und erleben Sie mediterrane Gastfreundschaft.',
  openGraph: {
    title: 'Gyros Agora – Original griechisches Gyros',
    description: 'Möchten Sie ein original griechisches Gyros probieren? Kommen Sie direkt rein und genießen Sie mediterrane Spezialitäten.',
    url: 'https://agentic-2dab4213.vercel.app',
    siteName: 'Gyros Agora',
    locale: 'de_DE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyros Agora – Original griechisches Gyros',
    description: 'Frisches Gyros, hausgemachte Mezze und mediterrane Atmosphäre in Ihrer Nachbarschaft.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gyros-sand text-gyros-blue antialiased">
        {children}
      </body>
    </html>
  );
}
