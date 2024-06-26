"use client";
import { useRef } from "react";
import {  motion } from "framer-motion";

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
      className="flex-center h-screen py-12"
      ref={parallaxWrapperRef}
    >
      <motion.div
        className="flex-center mx-auto flex-col md:container lg:relative lg:items-end"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <MouseParallax
          strength={0.08}
          parallaxContainerRef={parallaxWrapperRef}
          enableOnTouchDevice={false}
        >
          <Image
            src={getStrapiURL() + imageData.url}
            alt={image.name}
            height={imageData.height}
            width={imageData.width}
            className="pointer-events-none h-full select-none rounded-t-xl max-md:object-cover md:h-[60vh] lg:absolute lg:-top-14 lg:left-0 lg:z-0 lg:w-full lg:rounded-b-xl"
          />
        </MouseParallax>
        <div className="bg-background-alt rounded-xl p-6 text-secondary-foreground shadow-xl lg:z-10 lg:rounded-xl lg:p-10">
          <h2 className="mb-4 text-center text-5xl text-primary lg:text-left">
            {title}
          </h2>
          <div className="prose prose-invert md:text-lg">
            <BlockRendererClient content={detailedDescription} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
