"use client";
import { Variants, motion } from "framer-motion";

// Components
import { DateTime } from "luxon";
import BlockRendererClient from "@/components/custom/BlockRendererClient";

// Hooks
import useTailwindBreakpoint from "@/hooks/useTailwindBreakpoint";

// Types
import { Job } from "@/types/jobTypes";

const getDotVariants: (isLeft: boolean) => Variants = (isLeft) => ({
  initial: {
    scale: 0,
    x: isLeft ? "50%" : "-50%",
  },
  visible: {
    scale: 1,
    x: isLeft ? "50%" : "-50%",
  },
});

const getBlockVariants: (isLeft: boolean) => Variants = (isLeft) => ({
  initial: {
    opacity: 0,
    x: isLeft ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

const TimelineCard = ({ job, index }: { job: Job; index: number }) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    // description, // ? Not used in favor of detailedDescription
    detailedDescription,
  } = job;

  // Format dates
  const startFormatted = startDate
    ? DateTime.fromISO(startDate).toFormat("yyyy")
    : "";
  const endFormatted = endDate
    ? DateTime.fromISO(endDate).toFormat("yyyy")
    : "";

  // Check if classes for left or right alignment
  // When small screen I want isLeft to be false
  const isMediumOrSmaller = useTailwindBreakpoint("md");
  const isLeft = isMediumOrSmaller ? false : index % 2 === 0;

  return (
    // {/* Card wrapper full width */}
    <motion.div
      className="relative mb-2 flex flex-col items-center lg:flex-row"
      initial="initial"
      whileInView="visible"
      transition={{
        ease: "easeOut",
        staggerChildren: 0.35,
      }}
      viewport={{
        // once: true,
        margin: "150% 0px -50% 0px",
      }}
    >
      {/* Card content | justified either start or end */}
      <div
        className={`relative mx-auto flex w-full items-center ${
          isLeft ? "justify-start lg:text-right" : "justify-end"
        }`}
      >
        {/* Dot */}
        <motion.div
          className={`absolute left-0 top-7 block h-6 w-6 origin-center transform rounded-full border-8 border-primary bg-background ${
            isLeft ? "lg:left-auto lg:right-1/2" : "lg:left-1/2"
          }`}
          variants={getDotVariants(isLeft)}
        />

        {/* Rest of the card */}
        <div
          className={`w-full pl-7 lg:w-1/2 ${
            isLeft ? "lg:pl-8 lg:pr-8" : "lg:pl-8 lg:pr-8"
          }`}
        >
          <div className="space-y-5">
            <motion.div className="mt-7">
              {/* Pill for years */}
              <motion.span
                className="inline-block transform rounded-2xl bg-primary px-2 py-1 text-sm font-semibold text-primary-foreground lg:text-base"
                variants={getBlockVariants(isLeft)}
              >
                {startFormatted}{" "}
                {endFormatted ? `- ${endFormatted}` : "- Present"}
              </motion.span>
              {/* Title */}
              <motion.h3
                className="mb-1 mt-2 transform text-xl font-semibold lg:text-2xl"
                variants={getBlockVariants(isLeft)}
              >
                {title}
              </motion.h3>
              {/* Company */}
              <motion.p
                className="mb-4 text-muted-foreground lg:text-lg"
                variants={getBlockVariants(isLeft)}
              >
                {company} | {location}
              </motion.p>
              <motion.article
                className="text-left lg:max-w-prose"
                variants={getBlockVariants(isLeft)}
              >
                <BlockRendererClient content={detailedDescription} />
              </motion.article>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
