// Components
import { DateTime } from "luxon";
import BlockRendererClient from "@/components/custom/BlockRendererClient";

// Types
import { Job } from "@/types/jobTypes";

const TimelineCard = ({ job, index }: { job: Job; index: number }) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    // description, // ? Not used in favor of detailedDescription
    detailedDescription,
  } = job;

  // Format dates
  const startFormatted = startDate
    ? DateTime.fromISO(startDate).toFormat("yyyy")
    : "";
  const endFormatted = endDate
    ? DateTime.fromISO(endDate).toFormat("yyyy")
    : "";

  // Check if classes for left or right alignment
  const isLeft = index % 2 === 0;

  return (
    // {/* Card wrapper full width */}
    <div className="relative mb-2 flex flex-col items-center lg:flex-row">
      {/* Card content | justified either start or end */}
      <div
        className={`relative mx-auto flex w-full items-center ${
          isLeft ? "justify-start lg:text-right" : "justify-end"
        }`}
      >
        {/* Dot */}
        <div
          className={`absolute left-0 top-7 block h-6 w-6 shrink-0 -translate-x-1/2 transform rounded-full border-8 border-primary bg-background ${
            isLeft
              ? "lg:left-auto lg:right-1/2 lg:translate-x-1/2"
              : "lg:left-1/2"
          }`}
        ></div>
        <div
          className={`w-full pl-7 lg:w-1/2 ${
            isLeft ? "lg:pl-8 lg:pr-8" : "lg:pl-8 lg:pr-8"
          }`}
        >
          <div className="space-y-5">
            <div className="mt-7">
              {/* Pill for years */}
              <span className="rounded-2xl bg-primary px-2 py-1 text-sm font-semibold text-primary-foreground lg:text-base">
                {startFormatted}{" "}
                {endFormatted ? `- ${endFormatted}` : "- Present"}
              </span>
              {/* Title */}
              <h3 className="mb-1 mt-2 text-xl font-semibold lg:text-2xl">
                {title}
              </h3>
              {/* Company */}
              <p className="mb-4 text-muted-foreground lg:text-lg">
                {company} | {location}
              </p>
              <article className="text-left lg:max-w-prose">
                <BlockRendererClient content={detailedDescription} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
