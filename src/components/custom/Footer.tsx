interface FooterProps {
  data: {
    linkToSource?: string;
  };
}

const Footer = ({ data }: FooterProps) => {
  const { linkToSource } = data;
  return (
    <footer className="border-t border-primary/40 bg-background py-4 text-xs text-muted-foreground lg:text-base">
      <div className="container mx-auto flex flex-wrap justify-center gap-2 px-6 md:justify-between">
        <p className="relative flex items-center gap-1">
          <span className="iconify lucide--copyright relative"></span>Emmanuel
          Olivo 2024 - Present
        </p>
        <p className="relative">
          Made with{" "}
          <span className="iconify mdi--heart relative top-1 text-base text-red-500 lg:text-lg"></span>{" "}
          and{" "}
          <a
            href={linkToSource}
            target="_blank"
            className="cursor-pointer underline hover:text-primary"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
