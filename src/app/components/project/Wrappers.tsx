import dynamic from "next/dynamic";

const MapWrapper = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>, // Add loading state
});

const ChartWrapper = dynamic(() => import("./RechartsChart"), {
  ssr: false,
  loading: () => <p>Loading chart...</p>, // Add loading state
});

export { MapWrapper, ChartWrapper };
