// Utils
import { getStrapiURL } from "@/lib/utils";

// Components
import Link from "next/link";
import { Button } from "../ui/button";

// Types
import { LinkType } from "@/types/linkTypes";

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
    <div className="rounded-b-3xl bg-green-950">
      <header className="container relative mx-auto h-96 overflow-hidden md:h-screen md:max-h-[750px]">
        <div className="relative z-10 flex h-full flex-col justify-center">
          <h1 className="text-xl font-bold md:text-5xl lg:text-5xl">
            {heading}
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row">
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
