"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

// Components
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import ArticleRenderer from "../ArticleRenderer";
import TechnologyIconRenderer from "../TechnologyIconRenderer";

// Utils
import { getProjectData } from "@/data/loaders";

// Types
import { Project } from "@/types/projectTypes";
import { Button } from "@/components/ui/button";

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

const ProjectContentRenderer = ({ content }: { content: Project }) => {
  const {
    detailedDescription,
    technologies,
    project_categories,
    linkToCode,
    linkToView,
  } = content;

  return (
    <div className="min-h-80 space-y-6 overflow-y-auto px-6">
      {/* Category Pills */}
      {project_categories.length && (
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
      )}

      {/* Article Content  */}
      <ArticleRenderer
        className="mx-auto max-w-none"
        content={detailedDescription}
      />

      {/* Technologies Card */}
      {technologies.length && (
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary p-4 text-muted-foreground lg:grid-cols-4 lg:p-6">
          <h3 className="col-span-full mb-2 text-xl">Technologies Used:</h3>
          {technologies.map(({ label, iconKey }) => (
            <div key={iconKey} className="flex items-center gap-2">
              <TechnologyIconRenderer iconKey={iconKey} className="text-lg" />
              {label}
            </div>
          ))}
        </div>
      )}

      {/* Button Links */}
      {(linkToView || linkToCode) && (
        <div className="align-center flex flex-col justify-center gap-4 pt-4 md:flex-row md:justify-start">
          {linkToView && (
            <Button size="lg" variant="outline" asChild>
              <a href={linkToView} target="_blank">
                <span className="iconify mdi--external-link mr-2 text-xl"></span>
                Go To Live Project
              </a>
            </Button>
          )}
          {linkToCode && (
            <Button size="lg" variant="outline" asChild>
              <a href={linkToCode} target="_blank">
                <span className="iconify mdi--code mr-2 text-2xl"></span> View
                Source Code
              </a>
            </Button>
          )}
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
            <div className="min-h-80 p-6">
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
