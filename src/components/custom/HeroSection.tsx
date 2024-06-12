import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = ({ data }: { readonly data: any }) => {
  console.dir(data, { depth: null });

  const { primaryLink, secondaryLink, heading } = data;

  return (
    <header className="container mx-auto  relative h-[600px] overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center h-full ">
        <h1 className="text-xl font-bold md:text-5xl lg:text-5xl">{heading}</h1>
        <div className="flex mt-8 gap-8">
          <Button size="lg" asChild>
            <Link href={primaryLink.url}>{primaryLink.label}</Link>
          </Button>
          <Button size="lg" asChild variant="outline">
            <Link href={secondaryLink.url}>{secondaryLink.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
