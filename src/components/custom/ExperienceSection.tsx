import React from "react";
import { DateTime } from "luxon";
import BlockRendererClient from "../ui/BlockRendererClient";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string | null;
  endDate: string | null;
  description: string;
  detailedDescription: any;
};

const TimelineCard = ({ job, index }: { job: Job; index: number }) => {
  const { title, company, location, startDate, endDate, description, detailedDescription } = job;

  // Format dates
  const startFormatted = startDate ? DateTime.fromISO(startDate).toFormat("yyyy") : "";
  const endFormatted = endDate ? DateTime.fromISO(endDate).toFormat("yyyy") : "";

  // Check if classes for left or right alignment
  const isLeft = index % 2 === 0;

  console.dir(detailedDescription, { depth: null });

  return (
    // {/* Card wrapper full width */}
    <div className="relative flex flex-col items-center md:flex-row mb-2">
      {/* Card content | justified either start or end */}
      <div
        className={`flex items-center relative w-full mx-auto ${
          isLeft ? "justify-start md:text-right" : "justify-end"
        }`}
      >
        {/* Dot */}
        <div
          className={`border-8 border-primary bg-background shrink-0 rounded-full w-6 h-6 block absolute transform  top-7 left-0 -translate-x-1/2 ${
            isLeft ? "md:left-auto md:right-1/2 md:translate-x-1/2" : "md:left-1/2 "
          }`}
        ></div>
        <div
          className={`w-full md:w-1/2 pl-7 ${
            isLeft ? " md:pl-0 md:pr-8 lg:pl-8 " : " md:pl-8 lg:pr-8 "
          }`}
        >
          <div className="space-y-5 ">
            <div className="mt-7 ">
              {/* Pill for years */}
              <span className="text-sm lg:text-base font-semibold text-primary-foreground bg-primary py-1 px-2 rounded-2xl">
                {startFormatted} {endFormatted ? `- ${endFormatted}` : "- Present"}
              </span>
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-1 mt-2">{title}</h3>
              {/* Company */}
              <p className=" md:text-lg text-muted-foreground mb-4">
                {company} | {location}
              </p>
              <article className="text-left md:max-w-prose">
                <BlockRendererClient content={detailedDescription} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = ({ data }: { readonly data: any }) => {
  const { title, subtitle, job: jobsArray } = data;

  return (
    <section id="experience" className="container mx-auto ">
      <div className="mb-12 flex flex-col items-center md:mb-24">
        <h2 className="text-center text-5xl md:text-8xl text-primary mb-8">{title}</h2>
        <p className="text-center md:text-xl text-muted-foreground max-w-prose">{subtitle}</p>
      </div>
      {/* Timeline */}
      <div className="grid relative">
        {/* Absolutely positioned vertical line */}
        <div className="absolute top-0 left-0 md:left-1/2 w-[4px] h-full bg-primary transform -translate-x-1/2"></div>

        {/* Cards */}
        {jobsArray.map((job: Job, i: number) => (
          <TimelineCard key={job.id} index={i} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
