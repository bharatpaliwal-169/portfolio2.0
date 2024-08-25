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
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Bharat Paliwal",
      url: "https://twitter.com/softinstaa",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/assets/brandLogo.png" },
    { rel: "icon", url: "/assets/brandLogo.png" },
  ],

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
