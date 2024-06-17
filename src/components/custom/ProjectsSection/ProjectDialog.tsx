// FetchDialog.js
"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"; // Adjust import based on your structure
import { getProjectData } from "@/data/loaders";
import { Project } from "@/types/projectTypes";

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
    console.log(projectId);

    const fetchData = async () => {
      const strapiData = await getProjectData(projectId);

      setContent(strapiData);
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
      <DialogContent className="max-w-screen flex max-h-[90%] flex-col md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        <DialogTitle>Dialog Title</DialogTitle>
        <div className="overflow-y-auto">
          {content ? (
            <pre>{JSON.stringify(content, null, 2)}</pre>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
