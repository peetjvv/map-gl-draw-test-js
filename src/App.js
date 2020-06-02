import React, { useState, useRef } from "react";
import MapGL from "react-map-gl";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Editor, DrawLineStringMode } from "react-map-gl-draw";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pwY3owbGFxMDVwNTNxcXdwMms2OWtzbiJ9.1PPVl0VLUQgqrosrI2nUhg";

const App = () => {
  const mapRef = useRef(null);

  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11,
  });

  const [features, setFeatures] = useState(null);

  return (
    <div className="App">
      <MapGL
        ref={mapRef}
        width={"100%"}
        height={"800px"}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(vp) => setViewport(vp)}
      >
        <Editor
          features={features}
          onUpdate={(onUpdateProps) => setFeatures(onUpdateProps.data)}
          mode={new DrawLineStringMode()}
        />
      </MapGL>
    </div>
  );
};

export default App;
