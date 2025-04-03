import SharedHero from "../components/SharedHero";
import Link from "next/link";
import projects from "../data/projects";

const Projects = () => {
  return (
    <main>
      <SharedHero
        title="הפרויקטים שלנו"
        subtitle="גלו את הפרויקטים המובילים שלנו"
      />

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
