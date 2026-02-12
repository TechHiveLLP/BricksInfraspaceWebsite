"use client";

import { useState } from "react";
import CTASection from "@/components/CTASection";
import ProjectGallery from "@/components/ProjectGallery";
import { projectImages, ProjectKey } from "@/config/projectImages";

const completedProjects: { name: string; type: string; imageKey: ProjectKey }[] = [
  { name: "Dutron Corporate House", type: "Commercial", imageKey: "dutron-corporate" },
  { name: "ICAI Bhavan", type: "Institutional", imageKey: "icai" },
  { name: "Credai Garden", type: "Residential", imageKey: "credai" },
  { name: "HR Group", type: "Commercial", imageKey: "hr-group" },
];

const ongoingProjects: { name: string; type: string; progress: number; imageKey: ProjectKey }[] = [
  { name: "Anantbaug Villas", type: "Residential", progress: 75, imageKey: "anantbaug" },
  { name: "Anjani Group", type: "Commercial", progress: 60, imageKey: "anjani" },
  { name: "Dutron", type: "Commercial", progress: 70, imageKey: "dutron-ongoing" },
  { name: "Shivalik", type: "Institutional", progress: 45, imageKey: "shivalik" },
  { name: "Suryam - By The Waters", type: "Residential", progress: 55, imageKey: "suryam-waters" },
  { name: "Suryam - By Sage", type: "Residential", progress: 40, imageKey: "suryam-sage" },
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
                onClick={() => openGallery(project.name, [...projectImages[project.imageKey]])}
              >
                <img
                  src={projectImages[project.imageKey][0]}
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
                    <span>View {projectImages[project.imageKey].length} photos</span>
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
                onClick={() => openGallery(project.name, [...projectImages[project.imageKey]])}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={projectImages[project.imageKey][0]}
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
                      <span className="text-gray-700 font-medium">View {projectImages[project.imageKey].length} photos</span>
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
        key={selectedProject?.name || "closed"}
        isOpen={selectedProject !== null}
        onClose={closeGallery}
        projectName={selectedProject?.name || ""}
        images={selectedProject?.images || []}
      />
    </>
  );
}
