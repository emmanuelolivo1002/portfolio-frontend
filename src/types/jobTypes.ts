export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string | null;
  endDate: string | null;
  description: string;
  detailedDescription: any;
};
