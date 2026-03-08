// Central project data configuration
// To add a new project, just add an entry to the appropriate array below.
// If the project has photos, add its images to projectImages.ts first.

import { projectImages, ProjectKey } from "./projectImages";

export type Project = {
  key: ProjectKey | null; // null = no images yet (uses placeholder)
  name: string;
  type: string;
  status: "completed" | "ongoing";
  featured: boolean; // shown on homepage preview
  progress?: number; // 0-100, only for ongoing projects
};

// ─── Completed Projects ─────────────────────────────────────────────

export const completedProjects: Project[] = [
  {
    key: "dutron-corporate",
    name: "Dutron Corporate House",
    type: "Commercial",
    status: "completed",
    featured: true,
  },
  {
    key: "icai",
    name: "ICAI Bhavan",
    type: "Institutional",
    status: "completed",
    featured: true,
  },
  {
    key: "credai",
    name: "Credai Garden",
    type: "Parks and Gardens",
    status: "completed",
    featured: true,
  },
  {
    key: "hr-group",
    name: "HR Group",
    type: "Residential",
    status: "completed",
    featured: true,
  },
  {
    key: "medrical-one",
    name: "Savy Civic - Medrical One",
    type: "Commercial",
    status: "completed",
    featured: false,
  },
];

// ─── Ongoing Projects ───────────────────────────────────────────────

export const ongoingProjects: Project[] = [
  {
    key: "anjani",
    name: "Anjani Farms",
    type: "Residential",
    status: "ongoing",
    featured: true,
    progress: 60,
  },
  {
    key: "dutron-ongoing",
    name: "Dutron Corporate House (Phase 2)",
    type: "Commercial",
    status: "ongoing",
    featured: true,
    progress: 85,
  },
  {
    key: "shivalik",
    name: "Shivalik Institute of Real Estate",
    type: "Institutional",
    status: "ongoing",
    featured: true,
    progress: 90,
  },
  {
    key: "suryam-waters",
    name: "Suryam - By The Waters",
    type: "Residential",
    status: "ongoing",
    featured: false,
    progress: 10,
  },
  {
    key: "sage-repose",
    name: "Sage - By Repose",
    type: "Residential",
    status: "ongoing",
    featured: false,
    progress: 40,
  },
  {
    key: "anantbaug",
    name: "Amansara by Anantbaug Villas",
    type: "Residential",
    status: "ongoing",
    featured: false,
    progress: 0,
  },
  {
    key: "anantbaug-2",
    name: "Amansara by Anantbaug Villas 2",
    type: "Residential",
    status: "ongoing",
    featured: false,
    progress: 0,
  },
];

// ─── Helper utilities ───────────────────────────────────────────────

const basePath = process.env.NODE_ENV === "production" ? "/BricksInfraspaceWebsite" : "";
export const placeholderImage = `${basePath}/placeholder-project.svg`;

/** Get the images array for a project, falling back to placeholder */
export function getProjectImages(project: Project): string[] {
  if (project.key && project.key in projectImages) {
    return [...projectImages[project.key]];
  }
  return [placeholderImage];
}

/** Get the cover/thumbnail image for a project */
export function getProjectCover(project: Project): string {
  return getProjectImages(project)[0];
}

/** All projects combined */
export const allProjects: Project[] = [...completedProjects, ...ongoingProjects];

/** Featured projects for homepage */
export const featuredCompleted = completedProjects.filter((p) => p.featured);
export const featuredOngoing = ongoingProjects.filter((p) => p.featured);
