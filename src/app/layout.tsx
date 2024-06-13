import type { Metadata } from "next";

// Utils
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

// Components
import { HeaderNav } from "@/components/custom/HeaderNav";

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
    <html lang="en" className="scroll-smooth">
      <body className={lexendDeca.className}>
        <HeaderNav data={globalData.header} />
        {children}
      </body>
    </html>
  );
}
