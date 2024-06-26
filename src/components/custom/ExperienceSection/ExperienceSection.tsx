
// Components
import TimelineCard from "./TimelineCard";


// Types
import { Job } from "@/types/jobTypes";


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
        <div className="mb-12 flex flex-col items-center md:mb-20">
          <h2 className="mb-8 text-center text-5xl text-primary md:text-8xl">
            {title}
          </h2>
          <p className="max-w-prose text-center text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        </div>
        {/* Timeline */}
        <div className="relative grid">
          {/* Absolutely positioned vertical line */}
          <div className="absolute left-0 top-0 h-full w-[4px] -translate-x-1/2 transform rounded-full bg-primary lg:left-1/2"></div>

          {/* Cards */}
          {jobsArray.map((job: Job, i: number) => (
            <TimelineCard key={job.id} index={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
