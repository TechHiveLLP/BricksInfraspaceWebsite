import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Bricks Infraspace - Join Gujarat's Trusted Construction Team",
  description:
    "Build your career with Bricks Infraspace. We're looking for passionate professionals in construction, architecture, and project management. Competitive packages and growth opportunities in Ahmedabad.",
  openGraph: {
    title: "Careers | Bricks Infraspace",
    description:
      "Join Gujarat's trusted construction team. Opportunities in construction, architecture, and project management with competitive packages and professional growth.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
