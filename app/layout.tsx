import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import Providers from './Provider';
import "./globals.css";


const roboto = Roboto({
  weight: ['400','500','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bharat Paliwal",
  description: "Bharat Paliwal Protfolio website",
  other: {
    "og:type": "website",
    'theme-color': '#',
    "color-scheme": "dark",
    "twitter:image": '',
    "twitter:card": "summary_large_image",
    "og:url": "https://bharat-paliwal.versel.app",
    "og:image": '',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
