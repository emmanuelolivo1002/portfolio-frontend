"use client";
import { useRef } from "react";

// utils
import { getStrapiURL } from "@/lib/utils";

// Components
import Image from "next/image";
import { MouseParallax } from "react-just-parallax";
import BlockRendererClient from "./BlockRendererClient";

// Types
import { BlocksContent } from "@strapi/blocks-react-renderer";

const AboutSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly detailedDescription: BlocksContent;
    readonly image: any;
  };
}) => {
  const { title, detailedDescription, image } = data;
  const imageData = image.formats.large;

  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="flex-center min-h-[80vh]"
      ref={parallaxWrapperRef}
    >
      <div className="mx-auto flex flex-col items-center md:container lg:relative lg:items-end">
        <MouseParallax
          strength={0.08}
          parallaxContainerRef={parallaxWrapperRef}
        >
          <Image
            src={getStrapiURL() + imageData.url}
            alt={image.name}
            height={imageData.height}
            width={imageData.width}
            className="pointer-events-none h-[60vh] select-none rounded-t-xl lg:absolute lg:-top-14 lg:left-0 lg:z-0 lg:w-full lg:rounded-b-xl"
          />
        </MouseParallax>
        <div className="rounded-xl bg-secondary p-6 text-secondary-foreground lg:z-10 lg:rounded-xl lg:p-10">
          <h2 className="mb-4 text-center text-5xl text-primary lg:text-left">
            {title}
          </h2>
          <div className="prose prose-invert text-lg">
            <BlockRendererClient content={detailedDescription} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;