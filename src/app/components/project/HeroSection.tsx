import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Project {
  status: string;
  name: string;
  under_name: string;
}

interface HeroSectionProps {
  project: Project;
}

const HeroSection = ({ project }: HeroSectionProps) => {
  return (
    <section className="min-h-170 relative flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-900 p-8 md:p-16 flex items-center">
        <div className="max-w-xl">
          <div className="flex items-center">
            <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {project.name}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {project.under_name}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 rounded-md cursor-pointer m-auto px-4 text-white text-xl flex items-center gap-2">
                תיאום פגישה
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto bg-cover bg-center relative bg-[url(/images/herzliya.jpg)]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
