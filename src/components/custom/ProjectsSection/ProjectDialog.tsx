"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

// Components
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // Adjust import based on your structure
import { Skeleton } from "@/components/ui/skeleton";
import ArticleRenderer from "../ArticleRenderer";

// Utils
import { getProjectData } from "@/data/loaders";

// Types
import { Project, Technology } from "@/types/projectTypes";

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Skeleton className="h-80 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
};

const ICON_MAP = {
  default: "iconify mdi--code",
  nextjs: "iconify file-icons--nextjs",
  bootstrap: "iconify fa-brands--bootstrap",
  capacitor: "iconify ion--logo-capacitor",
  css: "iconify fa-brands--css3-alt",
  figma: "iconify hugeicons--figma",
  html: "iconify fa-brands--html5",
  java: "iconify hugeicons--java",
  javascript: "iconify fa-brands--js",
  jquery: "iconify mdi--jquery",
  react: "iconify fa-brands--react",
  typescript: "iconify akar-icons--typescript-fill",
  mongodb: "iconify devicon-plain--mongodb",
  tailwind: "iconify mdi--tailwind",
  mysql: "iconify grommet-icons--mysql",
  swift: "iconify fa-brands--swift",
  wordpress: "iconify fa-brands--wordpress-simple",
};

const TechnologyIconRenderer = ({ technology }: { technology: Technology }) => {
  const { iconKey, label } = technology;

  const finalIcon =
    ICON_MAP[iconKey as keyof typeof ICON_MAP] || ICON_MAP.default;

  return (
    <div className="flex items-center gap-2">
      <span className={finalIcon + " text-xl"}></span>
      {label}
    </div>
  );
};

const ProjectContentRenderer = ({ content }: { content: Project }) => {
  const { detailedDescription, technologies, project_categories } = content;

  return (
    <div className="min-h-80 space-y-4 overflow-y-auto px-6">
      {/* Category Pills */}
      {project_categories.length && (
        <div className="flex gap-3">
          {project_categories.map((category) => (
            <span
              key={category.id}
              className="rounded-2xl border-2 border-foreground px-2 py-1 text-xs text-foreground"
            >
              {category.label}
            </span>
          ))}
        </div>
      )}

      <ArticleRenderer
        className="mx-auto max-w-none"
        content={detailedDescription}
      />
      {technologies.length && (
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary p-4 text-muted-foreground lg:grid-cols-4 lg:p-6">
          <h3 className="col-span-full mb-2 text-xl">Technologies Used:</h3>
          {technologies.map((technology) => (
            <TechnologyIconRenderer
              key={technology.iconKey}
              technology={technology}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type ProjectDialogProps = {
  projectId: number;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

const ProjectDialog = ({
  projectId,
  isOpen,
  onOpenChange,
}: ProjectDialogProps) => {
  const [content, setContent] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const strapiData = await getProjectData(projectId);

      setContent(strapiData as Project);
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen, projectId]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        onOpenChange(open);
      }}
    >
      <DialogContent className="max-w-screen flex max-h-[90%] flex-col gap-8 px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-md">
        {content ? (
          <>
            <DialogTitle className="px-6 text-primary">
              {content.title}
            </DialogTitle>
            <ProjectContentRenderer content={content} />
          </>
        ) : (
          <>
            <DialogTitle className="px-6 text-primary">Loading</DialogTitle>
            <div className="min-h-80">
              <LoadingSkeleton />
              <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
