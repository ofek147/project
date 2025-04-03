import React from "react";
import { MapWrapper } from "./Wrappers";

interface Coordinate {
  lat: number;
  lng: number;
}

interface Project {
  id: number;
  coordinates: Coordinate[];
  center: Coordinate;
}

interface MapSectionProps {
  project: Project;
}

export default function MapSection(props: MapSectionProps) {
  const { project } = props;

  return (
    <div className="mx-auto px-4">
      <div className="mx-auto max-w-4xl shadow-2xl rounded-lg">
        <h1 className="text-2xl text-center font-bold mb-4">מיקום הפרויקט</h1>

        <div className="shadow-2xl rounded-lg">
          <MapWrapper
            parcels={project.coordinates}
            center={project.center}
            zoom={14}
          />
        </div>
      </div>
    </div>
  );
}
