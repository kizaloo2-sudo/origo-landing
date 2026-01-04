import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Origo - 10-100X Your Revenue',
  description: 'Market Signal Consultancy - Insight, Instinct, Instant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}