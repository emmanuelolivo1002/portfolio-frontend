// Utils
import { getStrapiURL } from "@/lib/utils";

// Components
import Link from "next/link";
import { Button } from "../ui/button";
import BackgroundSVG from "@/assets/svg/bg-2.svg";

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
    <div className="relative overflow-hidden rounded-b-3xl border-b border-primary/40">
      <header className="container mx-auto h-96 md:h-screen md:max-h-[750px]">
        <div className="absolute bottom-0 right-0 -z-10 flex w-full justify-center lg:left-0 lg:w-full">
          <BackgroundSVG className="w-full" />
        </div>
        <div className="flex h-full flex-col justify-center">
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
