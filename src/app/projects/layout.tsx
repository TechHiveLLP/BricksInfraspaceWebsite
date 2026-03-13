import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Bricks Infraspace - Completed & Ongoing Construction Projects",
  description:
    "Browse our portfolio of completed and ongoing construction projects including residential, commercial, and heritage restoration work across Ahmedabad and Gujarat.",
  openGraph: {
    title: "Our Projects | Bricks Infraspace",
    description:
      "Explore completed and ongoing construction projects — residential, commercial, and heritage restoration across Ahmedabad and Gujarat.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
