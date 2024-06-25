"use client";
// Utils
import { Variants, motion } from "framer-motion";
import { getStrapiURL } from "@/lib/utils";

// Components
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Types
import { LinkType } from "@/types/linkTypes";

// Motion Variants
const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeroButtons = ({
  primaryLink,
  secondaryLink,
}: {
  primaryLink: LinkType;
  secondaryLink: LinkType;
}) => {
  const renderLink = (link: LinkType) => {
    const { type, url, label } = link;
    if (type === "file") {
      return (
        <a href={getStrapiURL() + url} target="_blank">
          {label}
        </a>
      );
    }
    if (type === "external") {
      return (
        <a href={url} target="_blank">
          {label}
        </a>
      );
    }

    return <Link href={url}>{label}</Link>;
  };
  return (
    <motion.div
      className="mt-8 flex flex-col gap-4 sm:gap-8 md:flex-row lg:mt-12"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 1.8,
        staggerChildren: 0.2,
        ease: "easeInOut",
      }}
    >
      <motion.div variants={buttonVariants}>
        <Button size="xl" asChild className="shadow-xl">
          {renderLink(primaryLink)}
        </Button>
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Button size="xl" asChild variant="outline" className="shadow-xl">
          {renderLink(secondaryLink)}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons;
