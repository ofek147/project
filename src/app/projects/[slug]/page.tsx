"use client";

import { useParams } from "next/navigation";
import projects from "@/app/data/projects";
import HeroSection from "../components/project/HeroSection";
import AboutSection from "../components/project/AboutSection";
import MapSection from "../components/project/MapSection";
import ChartSection from "../components/project/ChartSection";

const Project = () => {
  const params: { slug: string } = useParams();
  const decodedSlug = decodeURIComponent(params.slug);

  const selectedProject = projects.find(
    (project) => project.slug === decodedSlug
  );

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <HeroSection project={selectedProject} />
      <AboutSection project={selectedProject} />
      <MapSection project={selectedProject} />
      <ChartSection />
    </div>
  );
};

export default Project;
