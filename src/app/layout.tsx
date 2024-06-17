import type { Metadata } from "next";

// Utils
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

// Components
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
      className="scrollbar-thumb-rounded-full scrollbar scrollbar-w-3 scrollbar-h-3 scrollbar-thumb-primary/40 active:scrollbar-thumb-primary hover:scrollbar-thumb-primary/60 scrollbar-track-[transparent] hover:scrollbar-track-foreground/10 [&_*]:scrollbar-thumb-rounded-full [&_*]:scrollbar [&_*]:scrollbar-w-3 [&_*]:scrollbar-h-3 [&_*]:scrollbar-thumb-primary/40 [&_*]:active:scrollbar-thumb-primary [&_*]:hover:scrollbar-thumb-primary/60 [&_*]:scrollbar-track-[transparent] [&_*]:hover:scrollbar-track-foreground/10 scroll-smooth [&_*]:scroll-smooth"
    >
      <body className={lexendDeca.className}>
        <HeaderNav data={globalData.header} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
