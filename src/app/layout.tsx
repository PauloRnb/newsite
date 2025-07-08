import type { Metadata } from "next";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import SubHeader from "@/components/SubHeader/SubHeader";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Net Evolution - Provedor de Internet 100% Fibra Óptica | Sua Internet com Velocidade e Estabilidade",
  description:
    "Na Net Evolution, oferecemos internet 100% fibra óptica com conexão rápida, estável e excelente custo-benefício para sua casa ou empresa. Atendimento regional com suporte 24h.",
  keywords: [
    "internet fibra óptica",
    "internet 100% fibra",
    "internet 100% fibra óptica",
    "provedor de internet",
    "internet rápida",
    "internet estável",
    "internet residencial",
    "internet empresarial",
    "conexão fibra óptica",
    "internet banda larga",
  ],
  authors: [{ name: "Net Evolution" }],
  openGraph: {
    title:
      "Net Evolution - Provedor de Internet Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade para residências e empresas. Suporte 24h e planos personalizados.",
    url: "https://www.seusite.com.br", // coloque aqui o seu domínio real
    siteName: "Net Evolution",
    images: [
      {
        url: "https://www.seusite.com.br/imagens/og-image.jpg", // substitua pela imagem real
        width: 1200,
        height: 630,
        alt: "Net Evolution - Provedor de Internet 100% Fibra Óptica",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Net Evolution - Provedor de Internet 100% Fibra Óptica | Conexão Rápida e Estável",
    description:
      "Internet fibra óptica com alta velocidade e estabilidade para residências e empresas. Suporte 24h e planos personalizados.",
    images: ["https://www.seusite.com.br/imagens/twitter-image.jpg"], // substitua pela imagem real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${figtree.className} antialiased bg-zinc-100`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative flex flex-col min-h-screen">
            <SubHeader />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
