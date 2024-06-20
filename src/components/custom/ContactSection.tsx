const ICON_MAP = {
  default: "iconify mdi--external-link",
  email: "iconify mdi--email",
  linkedIn: "iconify mdi--linkedin",
  github: "iconify mdi--github",
  gitlab: "iconify mdi--gitlab",
  stackOverflow: "iconify mdi--stack-overflow",
  behance: "iconify akar-icons--behance-fill",
  dribbble: "iconify akar-icons--dribbble-fill",
  twitter: "iconify mdi--twitter",
  instagram: "iconify mdi--instagram",
  x: "iconify bi--twitter-x",
};

const ContactSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly socialLinks: {
      [key: string]: string;
    };
  };
}) => {
  const { title, subtitle, socialLinks } = data;

  return (
    <section id="contact" className="py-16 md:py-28">
      <div className="container relative mx-auto">
        <div className="mb-12 flex flex-col items-center lg:mb-16">
          <h2 className="mb-8 text-center text-5xl text-primary md:text-7xl lg:mb-12 lg:text-8xl xl:text-9xl">
            {title}
          </h2>
          <p className="max-w-prose text-center text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        </div>
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {Object.entries(socialLinks).flatMap(([key, value]) => {
            if (!value) return [];

            const finalIcon =
              ICON_MAP[key as keyof typeof ICON_MAP] || ICON_MAP.default;

            // if email then add mailto
            let href = value;
            if (key === "email") {
              href = `mailto:${value}`;
            }

            return (
              <a
                key={key}
                className="flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary/10 p-2 text-muted-foreground shadow-lg transition-colors duration-300 ease-in-out hover:bg-primary hover:from-primary hover:text-primary-foreground md:p-6"
                target="_blank"
                rel="noopener noreferrer"
                href={href}
              >
                <span className={`${finalIcon} text-4xl md:text-6xl`}></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
