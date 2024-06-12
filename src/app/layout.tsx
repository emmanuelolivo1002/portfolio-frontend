import type { Metadata } from "next";

// Utils
import { getGlobalData } from "@/data/loaders";

// Components
import { HeaderNav } from "@/components/custom/HeaderNav";

// Styles
import "./globals.css";
import { Lexend_Deca } from "next/font/google";

// Fonts
const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Olivo - Software Engineer",
  description:
    "As a seasoned Software Engineer since 2017, I specialize in front-end web and mobile development, with a strong emphasis on crafting exceptional user experiences and user interfaces. My expertise centers around the React framework, where I continuously leverage its capabilities to push the boundaries of design and functionality in digital solutions. Dedicated to integrating responsive, user-centric designs, I strive to deliver applications that not only meet but exceed user expectations. My commitment to excellence in UX and UI design is driven by a passion for creating visually appealing and highly functional applications, making me a dynamic contributor to any development team.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();
  // console.dir(globalData, { depth: null });

  return (
    <html lang="en" className="scroll-smooth">
      <body className={lexendDeca.className}>
        <HeaderNav data={globalData.header} />
        {children}
      </body>
    </html>
  );
}
