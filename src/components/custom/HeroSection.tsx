import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = ({ data }: { readonly data: any }) => {
  const { primaryLink, secondaryLink, heading } = data;

  return (
    // Wrapper
    <div className="rounded-b-3xl bg-green-950">
      <header className="container relative mx-auto h-[600px] overflow-hidden">
        <div className="relative z-10 flex h-full flex-col justify-center">
          <h1 className="text-xl font-bold md:text-5xl lg:text-5xl">
            {heading}
          </h1>
          <div className="mt-8 flex gap-8">
            <Button size="xl" asChild>
              <Link href={primaryLink.url}>{primaryLink.label}</Link>
            </Button>
            <Button size="xl" asChild variant="outline">
              <Link href={secondaryLink.url}>{secondaryLink.label}</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
