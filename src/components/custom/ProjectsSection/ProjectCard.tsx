// Components
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCardWrapper from "./ProjectCardWrapper";
import TechnologyIconRenderer from "../TechnologyIconRenderer";

// utils
import { getStrapiURL } from "@/lib/utils";

// Types
import { Project } from "@/types/projectTypes";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    id,
    title,
    shortDescription,
    thumbnail,
    project_categories,
    technologies,
  } = project;

  const thumbnailData = thumbnail.formats.medium;

  // Get at most 10 technologies
  const technologiesToShow = technologies.slice(0, 6);

  return (
    <ProjectCardWrapper projectId={id}>
      {/* Image */}
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg [&>div]:hover:opacity-100 [&_img]:hover:scale-105">
        {/* Add a overlay with a search icon in the center */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-out">
          <div className="flex items-center justify-center rounded-full border-2 border-muted-foreground/10 bg-muted p-2 shadow-xl">
            <span className="iconify text-5xl text-primary mdi--search"></span>
          </div>
        </div>
        <Image
          src={getStrapiURL() + thumbnailData.url}
          alt={thumbnail.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-out"
          width={thumbnailData.width}
          height={thumbnailData.height}
        />
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
              className="flex items-center justify-center rounded-full border border-secondary-foreground/20 bg-secondary p-2"
            >
              <TechnologyIconRenderer
                iconKey={iconKey}
                className="text-lg text-muted-foreground"
              />
            </div>
          ))}
        </div>
      )}
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
