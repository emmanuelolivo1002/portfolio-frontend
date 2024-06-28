import type { Metadata } from "next";

// Utils
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

// Components
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderNav from "@/components/custom/HeaderNav";
import Footer from "@/components/custom/Footer";

// Styles
import "./globals.css";
import { Lexend_Deca } from "next/font/google";

// Fonts
const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();
  return {
    title: metadata?.title,
    description: metadata.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar scrollbar-track-[transparent] scrollbar-thumb-primary/40 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-2 scrollbar-h-2 selection:bg-primary selection:text-primary-foreground hover:scrollbar-track-foreground/10 hover:scrollbar-thumb-primary/60 active:scrollbar-thumb-primary [&_*]:scroll-smooth [&_*]:scrollbar [&_*]:scrollbar-track-[transparent] [&_*]:scrollbar-thumb-primary/40 [&_*]:scrollbar-track-rounded-full [&_*]:scrollbar-thumb-rounded-full [&_*]:scrollbar-w-2 [&_*]:scrollbar-h-2 [&_*]:hover:scrollbar-track-foreground/10 [&_*]:hover:scrollbar-thumb-primary/60 [&_*]:active:scrollbar-thumb-primary"
    >
      <body className={lexendDeca.className}>
        <HeaderNav data={globalData.header} />
        {children}
        <Footer data={globalData.footer} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
