export type LinkType = {
  id: number;
  url: string;
  label: string;
  type: "internal" | "external" | "file";
  fileData: {
    id: number;
    name: string;
    url: string;
  } | null;
};
