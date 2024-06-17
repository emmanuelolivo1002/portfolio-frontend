// Components
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCardWrapper from "./ProjectCardWrapper";

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

  return (
    <ProjectCardWrapper projectId={id}>
      {/* Image */}
      <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={getStrapiURL() + thumbnailData.url}
          alt={thumbnail.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
          width={thumbnailData.width}
          height={thumbnailData.height}
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-3">
        {project_categories.map((category) => (
          <span
            key={category.id}
            className="rounded-2xl border-2 border-foreground px-2 py-1 text-xs text-foreground"
          >
            {category.label}
          </span>
        ))}
        <span className="rounded-2xl border-2 border-foreground px-2 py-1 text-xs text-foreground">
          Back End
        </span>
      </div>

      {/* Project Title */}
      <h3 className="mt-2 text-3xl font-semibold text-primary hover:underline">
        {title}
      </h3>

      {/* Short Description */}
      <p className="mt-2 text-lg text-muted-foreground">{shortDescription}</p>

      {/* Technologies */}
      <div className="mt-2 flex gap-2 overflow-hidden">
        {technologies.map(({ iconKey }) => (
          <div key={iconKey} className="rounded-full bg-secondary p-2">
            {iconKey}
          </div>
        ))}
      </div>

      {/* View Button */}
      <Button className="mt-4">View Project</Button>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
