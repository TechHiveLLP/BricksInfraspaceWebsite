import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const completedProjects = [
  {
    name: "Dutron Corporate House",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "ICAI Bhavan",
    type: "Institutional",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Credai Garden",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Parichay Corporate House",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const ongoingProjects = [
  {
    name: "HR Group",
    type: "Commercial",
    progress: 65,
  },
  {
    name: "Shivalik Institute of Real Estate",
    type: "Institutional",
    progress: 45,
  },
  {
    name: "Savy Civic - Medercial One",
    type: "Mixed Use",
    progress: 30,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
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
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden"
              >
                <img
                  src={project.image}
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
            {ongoingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
              >
                <span className="text-red-700 text-sm font-medium">{project.type}</span>
                <h4 className="text-gray-900 font-bold text-lg mt-1 mb-4">{project.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-red-700 h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-gray-500 text-sm">{project.progress}% Complete</span>
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
