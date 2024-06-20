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
    <section id="projects" className="bg-secondary py-12 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="mb-8 text-center text-5xl text-primary md:text-8xl">
            {title}
          </h2>
          <p className="max-w-prose text-center text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid gap-14 md:grid-cols-2 md:gap-14 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
