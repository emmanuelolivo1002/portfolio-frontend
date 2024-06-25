// Components
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";

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

  return (
    // Wrapper
    <BackgroundGradientAnimation
      containerClassName="relative overflow-hidden rounded-b-3xl border-b border-primary/40 md:h-screen md:max-h-[600px] lg:max-h-[800px] backdrop-blur-xl"
      className="container relative z-10 mx-auto py-10 md:h-screen md:max-h-[600px] lg:max-h-[800px]"
    >
      <div className="mt-6 flex h-full flex-col justify-center sm:mt-0 lg:max-w-[75%] xl:max-w-[85%]">
        <HeroHeading heading={heading} />
        <HeroButtons primaryLink={primaryLink} secondaryLink={secondaryLink} />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
