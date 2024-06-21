// Utils
import { getStrapiURL } from "@/lib/utils";

// Components
import Link from "next/link";
import { Button } from "../ui/button";
import HeroBackground from "./HeroBackground";

// Types
import { LinkType } from "@/types/linkTypes";

const HeadingWithGradient = ({ heading }: { heading: string }) => {
  const regex = /Emmanuel Olivo/gi; // Regular expression to match all instances, case-insensitive

  const formattedHeading = heading.split(regex).reduce(
    (acc, part, index, array) => {
      if (index < array.length - 1) {
        return (
          <>
            {acc}
            {part}
            <span className="bg-foreground bg-gradient-to-br from-primary to-primary/20 bg-clip-text text-transparent">
              Emmanuel Olivo
            </span>
          </>
        );
      }
      return (
        <>
          {acc}
          {part}
        </>
      );
    },
    <></>,
  );

  return <>{formattedHeading}</>;
};

const HeroSection = ({
  data,
}: {
  readonly data: {
    primaryLink: LinkType;
    secondaryLink: LinkType;
    heading: string;
  };
}) => {
  const { primaryLink, secondaryLink, heading } = data;

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
    // Wrapper
    <div className="relative overflow-hidden rounded-b-3xl border-b border-primary/40">
      <header className="container mx-auto py-10 md:h-screen md:max-h-[600px]">
        <HeroBackground />
        <div className="mt-6 flex h-full flex-col justify-center sm:mt-0 lg:max-w-[75%] xl:max-w-[85%]">
          <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <HeadingWithGradient heading={heading} />
          </h1>
          <div className="mt-8 flex flex-col gap-4 sm:gap-8 md:flex-row lg:mt-12">
            <Button size="xl" asChild>
              {renderLink(primaryLink)}
            </Button>
            <Button size="xl" asChild variant="outline">
              {renderLink(secondaryLink)}
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
