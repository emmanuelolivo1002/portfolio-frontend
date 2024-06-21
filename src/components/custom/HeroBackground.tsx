"use client";

import { MouseParallax } from "react-just-parallax";
import BackgroundSVG from "@/assets/svg/bg-2.svg";

const HeroBackground = () => {
  return (
    <div className="absolute bottom-0 right-0 -z-10 flex w-full justify-center max-sm:h-full lg:left-0 lg:w-full">
      <MouseParallax>
        <BackgroundSVG className="w-full scale-150 max-sm:h-full" />
      </MouseParallax>
    </div>
  );
};

export default HeroBackground;
