"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Components
import TimelineCard from "./TimelineCard";

// Types
import { Job } from "@/types/jobTypes";

type TimelineProps = {
  jobs: Job[];
};

const Timeline = ({ jobs }: TimelineProps) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const height = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative grid py-20" ref={timelineRef}>
      {/* Absolutely positioned vertical line */}
      <motion.div
        className="absolute left-0 top-0 w-[4px] -translate-x-1/2 transform rounded-full bg-primary lg:left-1/2"
        style={{
          height,
        }}
      ></motion.div>

      {/* Cards */}
      {jobs.map((job, i: number) => (
        <TimelineCard key={job.id} index={i} job={job} />
      ))}
    </div>
  );
};

export default Timeline;
