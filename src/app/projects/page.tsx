import SharedHero from "../components/SharedHero";
import Link from "next/link";
import projects from "../data/projects";

const Projects = () => {
  return (
    <main>
      {/* Hero Section */}
      <SharedHero
        title="הפרויקטים שלנו"
        subtitle="גלו את הפרויקטים המובילים שלנו"
      />

      {/* Main Content */}
      <div>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
