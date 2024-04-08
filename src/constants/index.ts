export const SITE_URL = "https://krishnaaa.com";
export const SITE_KEYWORDS = [];
export const COUNTRY_NAME = "INDIA";
export const TWITTER_URL = "@";
export const SITE_NAME = "Apoorva Kumari";
export const SITE_DESCRIPTION = `${SITE_NAME}'s portfolio website.`;

export interface IProject {
  name: string;
  description: string;
  projectSlug: string;
}

export const PROJECTS: IProject[] = [
  {
    name: "Train Engine",
    description: "This is a train engine. This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage",
    projectSlug: "1",
  },
  {
    name: "Train Carriage",
    description:
      "This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage. This is a train carriage",
    projectSlug: "2",
  },
  {
    name: "Train Caboose",
    description: "This is a train caboose",
    projectSlug: "3",
  },
  {
    name: "Train Engine",
    description: "This is a train engine",
    projectSlug: "4",
  },
  {
    name: "Train Carriage",
    description: "This is a train carriage",
    projectSlug: "5",
  },
  {
    name: "Train Caboose",
    description: "This is a train caboose",
    projectSlug: "6",
  },
];
