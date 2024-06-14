import React from "react";

const Footer = () => {
  return (
    <footer className="mt-2 border-t border-primary/40 bg-background py-4 text-muted-foreground">
      <div className="container mx-auto flex justify-between px-6">
        <p className="relative">
          <span className="iconify lucide--copyright relative top-[2px]"></span>{" "}
          Emmanuel Olivo 2024 - Present
        </p>
        <p className="relative">
          Made with{" "}
          <span className="iconify mdi--heart relative top-1 text-xl text-red-500"></span>{" "}
          and Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
