import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Olivo - Software Engineer",
  description:
    "As a seasoned Software Engineer since 2017, I specialize in front-end web and mobile development, with a strong emphasis on crafting exceptional user experiences and user interfaces. My expertise centers around the React framework, where I continuously leverage its capabilities to push the boundaries of design and functionality in digital solutions. Dedicated to integrating responsive, user-centric designs, I strive to deliver applications that not only meet but exceed user expectations. My commitment to excellence in UX and UI design is driven by a passion for creating visually appealing and highly functional applications, making me a dynamic contributor to any development team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  );
}
