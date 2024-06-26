"use client";
import { motion } from "framer-motion";

// Components
import ProjectCard from "./ProjectCard";

// Types
import { Project } from "@/types/projectTypes";

const ProjectsSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly projects: Project[];
  };
}) => {
  const { title, subtitle, projects } = data;

  return (
    <section id="projects" className="bg-background py-12 md:py-24 lg:py-36">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center md:mb-20">
          <motion.h2
            className="mb-8 text-center text-5xl text-primary md:text-8xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="max-w-prose text-center text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Cards Container */}
        <motion.div
          className="grid gap-14 md:grid-cols-2 md:gap-14 xl:grid-cols-3"
          initial="hidden"
          animate="visible"
          transition={{
            delayChildren: 1.8,
            staggerChildren: 0.2,
            ease: "easeInOut",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
