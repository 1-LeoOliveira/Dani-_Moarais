import type { Metadata } from "next";
import { Fredoka, Outfit } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danimorais.com.br"),
  title: "Dani Morais — Um show para todos!",
  description:
    "Dani Morais, cantora mineira. Do sertanejo ao funk, um show cheio de energia e contagiante para todos. Contrate para seu evento.",
  openGraph: {
    title: "Dani Morais — Um show para todos!",
    description:
      "Dani Morais, cantora mineira. Do sertanejo ao funk, um show cheio de energia e contagiante para todos. Contrate para seu evento.",
    url: "https://www.danimorais.com.br",
    siteName: "Dani Morais",
    images: [{ url: "/images/og.jpg", width: 1200, height: 1799 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dani Morais — Um show para todos!",
    description:
      "Dani Morais, cantora mineira. Do sertanejo ao funk, um show cheio de energia e contagiante para todos.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${fredoka.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
