import type { Metadata } from "next";
import { Playfair_Display, Lora, Courier_Prime, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "The Rythamo Gazette | Portfolio of Vishnu Vardhan M",
  description: "Official editorial portfolio of Vishnu Vardhan M (Rythamo) - CSE Student at Malla Reddy Deemed to be University and Generative AI Engineer. Blending vintage printing press aesthetics with cutting-edge Generative AI systems.",
  keywords: [
    "Vishnu Vardhan M",
    "Rythamo",
    "Malla Reddy Deemed to be University",
    "Malla Reddy University",
    "Gooty",
    "Generative AI Engineer",
    "AI Portfolio",
    "CSE Student Portfolio",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Vishnu Vardhan M (Rythamo)" }],
  creator: "Rythamo",
  metadataBase: new URL("https://rythamo.qzz.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${courier.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col font-serif-text selection:bg-ink selection:text-paper">
        {children}
      </body>
    </html>
  );
}
