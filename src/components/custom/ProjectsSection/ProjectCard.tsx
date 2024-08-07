"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Components
import { StrapiImage } from "../StrapiImage";
import TechnologyIconRenderer from "../TechnologyIconRenderer";
import ProjectDialog from "./ProjectDialog";

// Types
import { Project } from "@/types/projectTypes";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    id,
    title,
    shortDescription,
    thumbnail,
    project_categories,
    technologies,
  } = project;

  // If formats.medium is not available, use formats.small, if that is also not available, use thumbnail
  const thumbnailData = thumbnail.formats?.medium
    ? thumbnail.formats.medium
    : thumbnail.formats?.small
      ? thumbnail.formats.small
      : thumbnail.formats.thumbnail;

  // Get at most 10 technologies
  const technologiesToShow = technologies.slice(0, 6);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <motion.div
        onClick={handleOpenDialog}
        className="flex cursor-pointer flex-col text-foreground"
        initial="hidden"
        whileInView="visible"
        transition={{
          ease: "easeInOut",
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        {/* Image */}
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg [&>div]:hover:opacity-100 [&_img]:hover:scale-105">
          {/* Add a overlay with a search icon in the center */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-out">
            <div className="flex items-center justify-center rounded-full border-2 border-muted-foreground/10 bg-muted p-2 shadow-xl">
              <span className="iconify text-5xl text-primary mdi--search"></span>
            </div>
          </div>
          {thumbnailData ? (
            <StrapiImage
              src={thumbnailData.url}
              alt={thumbnail.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 ease-out"
              width={thumbnailData.width}
              height={thumbnailData.height}
            />
          ) : (
            <div className="bg-background-alt h-full w-full duration-300 ease-out"></div>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex gap-3">
          {project_categories.map((category) => (
            <span
              key={category.id}
              className="rounded-2xl border-2 border-muted-foreground px-2 py-1 text-xs text-muted-foreground"
            >
              {category.label}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-3xl font-semibold text-primary hover:underline">
          {title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-foreground md:text-base lg:text-base xl:text-lg">
          {shortDescription}
        </p>

        {/* Technologies */}
        {technologiesToShow.length && (
          <div className="mt-4 flex gap-2 overflow-hidden">
            {technologiesToShow.map(({ iconKey }) => (
              <div
                key={iconKey}
                className="bg-background-alt flex items-center justify-center rounded-full border border-secondary-foreground/20 p-2"
              >
                <TechnologyIconRenderer
                  iconKey={iconKey}
                  className="text-lg text-muted-foreground"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
      <ProjectDialog
        projectId={id}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default ProjectCard;
