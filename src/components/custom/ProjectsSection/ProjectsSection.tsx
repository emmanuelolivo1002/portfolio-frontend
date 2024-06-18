import { Project } from "@/types/projectTypes";
import ProjectCard from "./ProjectCard";

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
