import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduardo Sousa | Desenvolvedor de Produtos Digitais com IA",
  description:
    "Desenvolvedor de soluções com IA, profissional do mercado financeiro e criador de SaaS e automações. Especializado em Next.js, TypeScript, Python e integração de IA em produtos digitais.",
  keywords: [
    "desenvolvedor",
    "IA",
    "inteligência artificial",
    "Next.js",
    "TypeScript",
    "Python",
    "data science",
    "finanças",
    "SaaS",
    "automação",
  ],
  authors: [{ name: "Eduardo Sousa" }],
  openGraph: {
    title: "Eduardo Sousa | Desenvolvedor de Produtos Digitais com IA",
    description:
      "Desenvolvedor de soluções com IA, profissional do mercado financeiro e criador de SaaS e automações.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}

