import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bricks Infraspace - Get in Touch for Construction Inquiries",
  description:
    "Contact Bricks Infraspace for project inquiries, consultations, or collaborations. Visit us at Shapath 5, SG Highway, Ahmedabad or call +91 89800 37007.",
  openGraph: {
    title: "Contact Us | Bricks Infraspace",
    description:
      "Get in touch for construction project inquiries, consultations, or collaborations. Located at Shapath 5, SG Highway, Ahmedabad.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
