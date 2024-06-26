"use client";
import { Variants, motion } from "framer-motion";

// Constants
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

// Motion
const textVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: "easeOut",
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
    <section id="contact" className="flex h-screen items-center justify-center">
      <div className="container relative mx-auto translate-y-[60px]">
        <div className="mb-12 flex flex-col items-center lg:mb-16">
          <motion.h2
            className="mb-8 text-center text-5xl text-primary sm:text-8xl lg:mb-12 xl:text-9xl"
            initial="initial"
            whileInView="visible"
            variants={textVariants}
            transition={transition}
            viewport={{
              amount: "all",
              // once: true,
              margin: "150% 0px 0px 0px",
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground sm:max-w-prose sm:text-center md:text-xl"
            initial="initial"
            whileInView="visible"
            variants={textVariants}
            transition={transition}
            viewport={{
              amount: "all",
              // once: true,
              margin: "150% 0px 0px 0px",
            }}
          >
            {subtitle}
          </motion.p>
        </div>
        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial="initial"
          whileInView="visible"
          transition={{
            delayChildren: 0.8,
            staggerChildren: 0.2,
            ease: "easeInOut",
          }}
        >
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
              <motion.a
                key={key}
                className="from-background-alt flex items-center justify-center rounded-full bg-gradient-to-br to-primary/10 p-2 text-muted-foreground shadow-lg transition-colors duration-300 ease-in-out hover:bg-primary hover:from-primary hover:text-primary-foreground md:p-6"
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                variants={{
                  initial: {
                    opacity: 0,
                    rotate: "45deg",
                    x: 50,
                  },
                  visible: {
                    opacity: 1,
                    rotate: "0deg",
                    x: 0,
                  },
                }}
              >
                <span className={`${finalIcon} text-4xl md:text-6xl`}></span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
