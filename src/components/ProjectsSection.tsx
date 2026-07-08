import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  featuredCompleted,
  featuredOngoing,
  getProjectCover,
} from "@/config/projects";

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered projects across 
            residential, commercial, and infrastructure sectors.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Completed Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompleted.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden"
              >
                <img
                  src={getProjectCover(project)}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-red-400 text-sm font-medium">{project.type}</span>
                  <h4 className="text-white font-bold text-lg">{project.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-8">Ongoing Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredOngoing.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden"
              >
                <img
                  src={getProjectCover(project)}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-red-400 text-sm font-medium">{project.type}</span>
                  <h4 className="text-white font-bold text-lg">{project.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
