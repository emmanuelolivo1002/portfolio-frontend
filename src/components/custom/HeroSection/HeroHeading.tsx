"use client";
import React from "react";

// Utils
import { Variants, motion } from "framer-motion";

// Motion Variants
const wordsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeroHeading = ({ heading }: { heading: string }) => {
  const words = heading.split(" ");

  const formattedHeading = words.map((word, index, arr) => {
    if (word.includes("Emmanuel") && arr[index + 1].includes("Olivo")) {
      return (
        <motion.span
          key={index}
          className="inline-block bg-foreground bg-gradient-to-br from-primary to-accent/20 bg-clip-text text-transparent"
          variants={wordsVariants}
        >
          {word} {arr[index + 1]}
        </motion.span>
      );
    } else if (word.includes("Olivo") && arr[index - 1].includes("Emmanuel")) {
      return null;
    }
    return (
      <motion.span
        className="inline-block"
        key={index}
        variants={wordsVariants}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <motion.h1
      className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 0.5,
        staggerChildren: 0.08,
        ease: "easeInOut",
      }}
    >
      {/* Add Spaces after every word */}
      {formattedHeading.map((word, index) => (
        <React.Fragment key={index}>{word} </React.Fragment>
      ))}
    </motion.h1>
  );
};

export default HeroHeading;
