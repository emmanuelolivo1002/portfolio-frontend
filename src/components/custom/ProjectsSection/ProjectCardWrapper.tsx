"use client";

import { useState } from "react";

// Components
import ProjectDialog from "./ProjectDialog";

type ProjectCardWrapperProps = {
  projectId: number;
  children: React.ReactNode;
};

const ProjectCardWrapper = ({
  projectId,
  children,
}: ProjectCardWrapperProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div
        onClick={handleOpenDialog}
        className="flex cursor-pointer flex-col text-foreground"
      >
        {children}
      </div>
      <ProjectDialog
        projectId={projectId}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default ProjectCardWrapper;
