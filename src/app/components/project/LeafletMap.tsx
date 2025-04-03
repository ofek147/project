import React, { useCallback, useMemo } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define interfaces for our component
interface Coordinate {
  lat: number;
  lng: number;
}

interface MapProps {
  parcels: Coordinate[];
  center: Coordinate;
  zoom?: number;
}

const LeafletMap = (props: MapProps) => {
  const { parcels = [], center, zoom = 0 } = props;

  const selectedParcel = parcels.length > 0 ? parcels : null;

  const polygonStyle = useMemo(
    () => ({
      color: "red",
      weight: 2,
    }),
    []
  );

  const handleMouseOver = useCallback((e: L.LeafletMouseEvent) => {
    const layer = e.target;
    layer.setStyle({
      fillOpacity: 0.4,
    });
  }, []);

  const handleMouseOut = useCallback((e: L.LeafletMouseEvent) => {
    const layer = e.target;
    layer.setStyle({
      fillOpacity: 0.3,
    });
  }, []);

  return (
    <div
      className="w-full h-96 rounded-lg overflow-hidden relative leaflet-map-container"
      style={{ zIndex: 10 }}
    >
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        className="w-full h-full"
      >
        {/* Base map layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Parcel polygons */}
        {selectedParcel && (
          <Polygon
            positions={[parcels]}
            pathOptions={polygonStyle}
            eventHandlers={{
              mouseover: handleMouseOver,
              mouseout: handleMouseOut,
            }}
          />
        )}
        {!selectedParcel && <p>No parcel selected.</p>}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
