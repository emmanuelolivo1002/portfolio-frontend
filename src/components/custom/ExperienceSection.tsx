import React from "react";

import { DateTime } from "luxon";

type Job = {
  title: string;
  company: string;
  location: string;
  startDate: string | null;
  endDate: string | null;
  description: string;
};

const jobsDummyData: Job[] = [
  {
    title: "Senior Front End Engineer",
    company: "WealthCharts",
    location: "Remote",
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    description:
      "WealthCharts is a financial technology company that provides a suite of financial tools to help investors make informed decisions about their investments.",
  },
  {
    title: "Front End Engineer",
    company: "Columbia University",
    location: "New York, NY",
    startDate: "2018-01-01",
    endDate: "2020-12-31",
    description:
      "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
  },
];

const TimelineCard = ({ job, index }: { job: Job; index: number }) => {
  const { title, company, location, startDate, endDate, description } = job;

  // Format dates
  const startFormatted = startDate ? DateTime.fromISO(startDate).toFormat("yyyy") : "";
  const endFormatted = endDate ? DateTime.fromISO(endDate).toFormat("yyyy") : "";

  // Check if classes for left or right alignment
  const isLeft = index % 2 === 0;

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
          className={`border-4 border-primary bg-background shrink-0 rounded-full w-4 h-4 block absolute  transform  top-8 left-0 -translate-x-1/2 ${
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
              <span className="text-sm font-semibold text-primary-foreground bg-primary py-1 px-2 rounded-2xl">
                {startFormatted} {endFormatted ? `- ${endFormatted}` : "Present"}
              </span>
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-1 mt-2">{title}</h3>
              {/* Company */}
              <p className=" md:text-lg text-muted-foreground mb-4">{company}</p>
              <p className="mb-1">{description}</p>
              <p className="text-sm text-muted-foreground ">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="container mx-auto py-6">
      <div className="mb-12">
        <h2 className="text-center text-5xl md:text-6xl text-primary mb-8">Experience</h2>
        <p className="text-center text-muted-foreground ">
          These are some of the awesome companies I had the privilege to work with.
        </p>
      </div>
      {/* Timeline */}
      <div className="grid relative">
        {/* Absolutely positioned vertical line */}
        <div className="absolute top-0 left-0 md:left-1/2 w-[2px] h-full bg-primary transform -translate-x-1/2"></div>

        {/* Cards */}
        {jobsDummyData.map((job, index) => (
          <TimelineCard key={index} index={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
