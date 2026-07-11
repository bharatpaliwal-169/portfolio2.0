import type { Metadata, Viewport } from "next";
import Providers from './Provider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat | Portfolio",
  description: "Bharat Paliwal Protfolio website",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "Bharat Paliwal",
      url: "https://x.com/BharatPaliwal23",
    },
  ],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#06120f" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
