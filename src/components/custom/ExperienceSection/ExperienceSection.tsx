"use client";
import { motion, Variants } from "framer-motion";

// Components
import Timeline from "./Timeline";

// Types
import { Job } from "@/types/jobTypes";

const textVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.5,
  delay: 0.2,
  ease: "easeOut",
};

const ExperienceSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly job: Job[];
  };
}) => {
  const { title, subtitle, job: jobsArray } = data;

  return (
    <section
      id="experience"
      className="bg-background-alt py-12 md:py-24 lg:py-36"
    >
      <div className="container mx-auto">
        {/* Title and subtitle */}
        <div className="mb-12 flex flex-col items-center md:mb-20">
          <motion.h2
            className="mb-8 text-center text-5xl text-primary md:text-8xl"
            initial="initial"
            whileInView="visible"
            variants={textVariants}
            transition={transition}
            viewport={{
              amount: "all",
              // once: true,
              margin: "150% 0px 0px 0px",
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="max-w-prose text-center text-muted-foreground md:text-xl"
            initial="initial"
            whileInView="visible"
            variants={textVariants}
            transition={transition}
            viewport={{
              amount: "all",
              // once: true,
              margin: "150% 0px 0px 0px",
            }}
          >
            {subtitle}
          </motion.p>
        </div>
        <Timeline jobs={jobsArray} />
      </div>
    </section>
  );
};

export default ExperienceSection;
