import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather, Cormorant_Garamond } from 'next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Aayu Yoga Amit | Authentic Ayurvedic Wellness & Herbal Care',
  description:
    'Discover natural healing with Aayu Yoga Amit – trusted Ayurvedic remedies, herbal products, and holistic wellness for a healthier lifestyle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${merriweather.variable} ${cormorant.variable}`}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
