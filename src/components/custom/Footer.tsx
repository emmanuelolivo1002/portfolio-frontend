interface FooterProps {
  data: {
    linkToSource?: string;
  };
}

const Footer = ({ data }: FooterProps) => {
  const { linkToSource } = data;
  return (
    <footer className="border-t border-primary/40 bg-background py-4 text-xs text-muted-foreground lg:text-base">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-center gap-2 px-6 md:flex-row md:justify-between">
        <p className="flex items-center gap-1">
          <span className="iconify lucide--copyright"></span>Emmanuel Olivo 2024
          - Present
        </p>
        <p className="flex items-center">
          Made with{" "}
          <span className="iconify mx-1 text-base text-red-500 mdi--heart lg:text-lg"></span>{" "}
          and{" "}
          <a
            href={linkToSource}
            target="_blank"
            className="ml-1 cursor-pointer underline hover:text-primary"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
