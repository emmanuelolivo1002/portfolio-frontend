"use client";

import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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

  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: contentRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={contentRef}
      className="relative grid min-h-80 gap-6 overflow-y-auto overflow-x-hidden px-6 lg:grid-rows-2 lg:content-start lg:justify-start"
    >
      <motion.div
        className="fixed left-0 right-0 top-0 h-2 origin-left bg-primary"
        style={{ scaleX }}
      />

      {/* Category Pills */}
      {project_categories.length && (
        <div className="flex gap-3 lg:hidden">
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
        className="mx-auto max-w-prose lg:col-start-1 lg:w-[65ch]"
        content={detailedDescription}
      />

      {/* Sidebar  */}
      <div className="flex flex-col gap-4 lg:sticky lg:top-0 lg:col-start-2">
        {/* Category Pills */}
        {project_categories.length && (
          <div className="flex gap-3 max-lg:hidden">
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

        {/* Technologies Card */}
        {technologies.length && (
          <div className="bg-background-alt grid gap-2 gap-x-8 rounded-xl p-4 text-muted-foreground md:grid-cols-2 lg:p-6">
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
          <div className="align-center flex flex-col flex-wrap justify-center gap-4 md:justify-start">
            {linkToView && (
              <Button size="lg" variant="outline" asChild>
                <a href={linkToView} target="_blank">
                  <span className="iconify mr-2 text-xl mdi--external-link"></span>
                  Go To Live Project
                </a>
              </Button>
            )}
            {linkToCode && (
              <Button size="lg" variant="outline" asChild>
                <a href={linkToCode} target="_blank">
                  <span className="iconify mr-2 text-2xl mdi--code"></span> View
                  Source Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
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
      <DialogContent className="flex max-h-[90%] w-max max-w-[90%] flex-col gap-8 px-0 lg:max-w-none">
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
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
