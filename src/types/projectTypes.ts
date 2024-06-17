export type ProjectCategory = { id: number; label: string };
export type Technology = { id: number; label: string; iconKey: string };

export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: any;
  linkToView: string | null;
  linkToCode: string | null;

  // Figure these out
  thumbnail: any;
  images: any;
  project_categories: ProjectCategory[];
  technologies: Technology[];
};
