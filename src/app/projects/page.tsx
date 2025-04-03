import SharedHero from "../components/SharedHero";
import Link from "next/link";
import projects from "../data/projects";
import { Project } from "../data/projects";
import { ArrowLeft, Clock } from "lucide-react";
import TabsSection from "../components/projects/TabsSection";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div key={project.id} className="md:w-5xl">
      <div className="grid md:grid-cols-2 gap-0">
        <div
          className="h-full min-h-[300px] bg-cover bg-center relative border-1 border-black"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <span className="absolute bg-blue-500 text-white flex flex-col gap-2 top-4 right-4 rounded-md px-2.5 py-0.5 text-xs">
            {project.status}
          </span>
          <div className="absolute bg-gray-200 text-gray-500 flex top-10 right-4 rounded-md px-1 py-0.5 text-xs">
            <Clock className="w-4 h-4 text-gray-600" />
            <span className="mr-1"> תווך בינוני (2-5 שנים)</span>
          </div>
        </div>

        <div className="p-6 flex flex-col border-black border-1 border-r-0 bg-white">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-black mb-4">{project.under_name}</p>

            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold">התקדמות התכנון</span>
              <span className="text-sm font-bold">40%</span>
            </div>
            <div className="w-full">
              <div className="h-2 rounded-full bg-green-600" />
            </div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row justify-center">
            <Link
              href={`/projects/${project.slug}`}
              className="w-full md:w-auto"
            >
              <button className="w-full bg-green-800 border-2 border-green-800 hover:border-green-900 hover:bg-green-900 rounded-md cursor-pointer p-2 text-white flex items-center justify-center">
                למידע מפורט
                <ArrowLeft className="mr-2 w-4 h-4" />
              </button>
            </Link>
            <Link href="/Contact" className="w-full md:w-auto">
              <button className="w-full border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white rounded-md cursor-pointer p-2 flex items-center justify-center">
                צור קשר
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <main>
      <SharedHero
        title="הפרויקטים שלנו"
        subtitle="גלו את הפרויקטים המובילים שלנו"
      />
      <div className="grid gap-2 justify-center">
        <TabsSection />
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
