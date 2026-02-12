"use client";

import { useState } from "react";
import CTASection from "@/components/CTASection";
import ProjectGallery from "@/components/ProjectGallery";

const basePath = process.env.NODE_ENV === "production" ? "/BricksInfraspaceWebsite" : "";

const completedProjects = [
  {
    name: "Dutron Corporate House",
    type: "Commercial",
    image: `${basePath}/photos for website /completed projects /dutron (completed project )/IMG_8692.jpg`,
    images: [
      `${basePath}/photos for website /completed projects /dutron (completed project )/IMG_8692.jpg`,
      `${basePath}/photos for website /completed projects /dutron (completed project )/DJI_0044.jpg`,
    ],
  },
  {
    name: "ICAI Bhavan",
    type: "Institutional",
    image: `${basePath}/photos for website /completed projects /icai/icai.jpg`,
    images: [
      `${basePath}/photos for website /completed projects /icai/icai.jpg`,
      `${basePath}/photos for website /completed projects /icai/IMG_5761.JPG`,
      `${basePath}/photos for website /completed projects /icai/IMG_5762.JPG`,
    ],
  },
  {
    name: "Credai Garden",
    type: "Residential",
    image: `${basePath}/photos for website /completed projects /credai /IMG_8735.jpg`,
    images: [
      `${basePath}/photos for website /completed projects /credai /IMG_8735.jpg`,
      `${basePath}/photos for website /completed projects /credai /a3d004b2-b577-49f1-a447-9d75ac44db26.jpg`,
      `${basePath}/photos for website /completed projects /credai /unnamed.webp`,
    ],
  },
  {
    name: "HR Group",
    type: "Commercial",
    image: `${basePath}/photos for website /completed projects /hr Group/hr_group.jpg`,
    images: [
      `${basePath}/photos for website /completed projects /hr Group/hr_group.jpg`,
      `${basePath}/photos for website /completed projects /hr Group/0c37f324-f551-4c75-a7b3-e93f293f4c03.jpg`,
      `${basePath}/photos for website /completed projects /hr Group/fe75134e-b422-49dd-ae1c-82cadc25eb41.jpg`,
    ],
  },
];

const ongoingProjects = [
  {
    name: "Anantbaug Villas",
    type: "Residential",
    progress: 75,
    image: `${basePath}/photos for website /ongoing projects /Anantbaug Villas/1.png`,
    images: [
      `${basePath}/photos for website /ongoing projects /Anantbaug Villas/1.png`,
      `${basePath}/photos for website /ongoing projects /Anantbaug Villas/image.png`,
    ],
  },
  {
    name: "Anjani Group",
    type: "Commercial",
    progress: 60,
    image: `${basePath}/photos for website /ongoing projects /anjani group/IMG_6971.JPG`,
    images: [
      `${basePath}/photos for website /ongoing projects /anjani group/IMG_6971.JPG`,
      `${basePath}/photos for website /ongoing projects /anjani group/IMG_6973.JPG`,
    ],
  },
  {
    name: "Dutron",
    type: "Commercial",
    progress: 70,
    image: `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.27 PM (1).jpeg`,
    images: [
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.27 PM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /IMG_8680.jpg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.25 PM.jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.26 PM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.26 PM.jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.27 PM (2).jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.27 PM.jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.28 PM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.28 PM.jpeg`,
      `${basePath}/photos for website /ongoing projects /dutron /WhatsApp Image 2026-02-03 at 3.15.29 PM.jpeg`,
    ],
  },
  {
    name: "Shivalik",
    type: "Institutional",
    progress: 45,
    image: `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.08 AM.jpeg`,
    images: [
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.08 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.08 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.09 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.10 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.10 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.11 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.11 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.12 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.12 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.13 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.13 AM.jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.14 AM (1).jpeg`,
      `${basePath}/photos for website /ongoing projects /shivalik/WhatsApp Image 2025-08-21 at 11.12.14 AM.jpeg`,
    ],
  },
  {
    name: "Suryam - By The Waters",
    type: "Residential",
    progress: 55,
    image: `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/1.png`,
    images: [
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/1.png`,
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/2.png`,
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/3.png`,
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/4.png`,
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/5.png`,
      `${basePath}/photos for website /ongoing projects /Suryam- By The Waters/image.png`,
    ],
  },
  {
    name: "Suryam - By Sage",
    type: "Residential",
    progress: 40,
    image: `${basePath}/photos for website /ongoing projects /Suryam-by sage/image.png`,
    images: [
      `${basePath}/photos for website /ongoing projects /Suryam-by sage/image.png`,
      `${basePath}/photos for website /ongoing projects /Suryam-by sage/image 1.png`,
      `${basePath}/photos for website /ongoing projects /Suryam-by sage/image2.png`,
      `${basePath}/photos for website /ongoing projects /Suryam-by sage/image3.png`,
      `${basePath}/photos for website /ongoing projects /Suryam-by sage/image4.png`,
    ],
  },
];

interface SelectedProject {
  name: string;
  images: string[];
}

const heritageImages = [
  "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);

  const openGallery = (name: string, images: string[]) => {
    setSelectedProject({ name, images });
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered and ongoing projects
          </p>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Completed Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openGallery(project.name, project.images)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-red-400 text-sm font-medium">{project.type}</span>
                  <h3 className="text-white font-bold text-xl">{project.name}</h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>View {project.images.length} photos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
              In Progress
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Ongoing Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => openGallery(project.name, project.images)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 font-medium">View {project.images.length} photos</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-red-700 text-sm font-medium">{project.type}</span>
                  <h3 className="text-gray-900 font-bold text-xl mt-1 mb-4">{project.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-red-700 h-3 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-gray-500 text-sm">{project.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Restoration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
              Specialized Work
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Heritage Restoration
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heritageImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Heritage Restoration ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Gallery Modal */}
      <ProjectGallery
        isOpen={selectedProject !== null}
        onClose={closeGallery}
        projectName={selectedProject?.name || ""}
        images={selectedProject?.images || []}
      />
    </>
  );
}
