import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime, Outfit, Anton, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rythamo (Vishnu Vardhan M) | Generative AI Engineer",
  description: "Official portfolio of Rythamo (Vishnu Vardhan M), a Generative AI Engineer and CSE Student from Gooty. Building cutting-edge AI systems.",
  keywords: [
    "Rythamo",
    "Ry",
    "Vishnu Vardhan M",
    "Vishnu Vardhan",
    "Generative AI Engineer",
    "AI Portfolio",
    "Malla Reddy University",
    "Gooty",
  ],
  authors: [{ name: "Vishnu Vardhan M" }],
  creator: "Rythamo",
  metadataBase: new URL("https://rythamo.qzz.io"),
  openGraph: {
    title: "Rythamo | Vishnu Vardhan M",
    description: "Generative AI Engineer & Developer",
    url: "https://rythamo.qzz.io",
    siteName: "Rythamo",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: "KDBy7Lwx-_7gwYyIWWpl5u82iu3F-TZFixkkZZBoCPA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${courier.variable} ${outfit.variable} ${anton.variable} ${unifraktur.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col font-serif-text selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}
