import Image from "next/image";
import { Button } from "../ui/button";
import { getStrapiURL } from "@/lib/utils";

type ProjectCategory = { id: number; label: string };
type Technology = { id: number; label: string; iconKey: string };

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: any;
  linkToView: string | null;
  linkToCode: string | null;

  // Figure these out
  thumbnail: any;
  images: any;
  project_categories: { data: ProjectCategory[] };
  technologies: { data: Technology[] };
};

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    shortDescription,
    detailedDescription,
    linkToView,
    linkToCode,
    thumbnail,
    images,
    project_categories,
    technologies,
  } = project;

  const thumbnailData = thumbnail.formats.small;

  return (
    <div className="flex cursor-pointer flex-col text-foreground">
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
        {project_categories.data.map((category) => (
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
        {technologies.data.map(({ iconKey }) => (
          <div key={iconKey} className="rounded-full bg-secondary p-2">
            {iconKey}
          </div>
        ))}
      </div>

      {/* View Button */}
      <Button className="mt-4">View Project</Button>
    </div>
  );
};

const ProjectsSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly subtitle: string;
    readonly project: Project[];
  };
}) => {
  const { title, subtitle, project } = data;

  return (
    <section id="projects" className="container mx-auto">
      <div className="mb-12 mt-12 flex flex-col items-center md:mt-24">
        <h2 className="mb-8 text-center text-5xl text-primary md:text-8xl">
          {title}
        </h2>
        <p className="max-w-prose text-center text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
