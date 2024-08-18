import type { Metadata } from "next";
import { Playfair_Display } from 'next/font/google'
import Providers from './Provider';
import "./globals.css";


const PlayFair = Playfair_Display({
  weight: ['400','500','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bharat | Portfolio",
  description: "Bharat Paliwal Protfolio website",
  other: {
    "og:type": "website",
    'theme-color': '#',
    "color-scheme": "light",
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
      <body className={PlayFair.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
