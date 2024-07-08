"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

// Components
import { StrapiImage } from "./StrapiImage";
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
      className="flex-center flex py-12 lg:h-screen"
      ref={parallaxWrapperRef}
    >
      <motion.div
        className="grid items-center lg:container lg:grid-cols-[2fr_1fr]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <div className="p-6 text-secondary-foreground shadow-xl lg:z-10 lg:rounded-xl lg:bg-background-alt lg:p-10">
          <h2 className="mb-4 text-center text-5xl text-primary lg:text-left">
            {title}
          </h2>
          <div className="prose prose-invert lg:text-lg">
            <BlockRendererClient content={detailedDescription} />
          </div>
        </div>
        <MouseParallax
          strength={0.08}
          parallaxContainerRef={parallaxWrapperRef}
          enableOnTouchDevice={false}
        >
          <StrapiImage
            src={imageData.url}
            alt={image.name}
            height={imageData.height}
            width={imageData.width}
            className="pointer-events-none w-full select-none grayscale lg:rounded-xl"
          />
        </MouseParallax>
      </motion.div>
    </section>
  );
};

export default AboutSection;
