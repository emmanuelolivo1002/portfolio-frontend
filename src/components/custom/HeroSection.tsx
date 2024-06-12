import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = ({ data }: { readonly data: any }) => {
  const { primaryLink, secondaryLink, heading } = data;

  return (
    // Wrapper
    <div className="bg-green-950 rounded-b-3xl">
      <header className="container mx-auto relative h-[600px] overflow-hidden ">
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
    </div>
  );
};

export default HeroSection;
