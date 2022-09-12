import React from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";


var clickedElement = () => {
  console.log("CIAO2")
}

export default function App() {
  return (
    <div id="card">
      <model-viewer
        src="/Rose_Bush_v1_Iteration2.glb"
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      >
        <div className="controls" id="color-controls" onClick={() => { clickedElement() }}>
          <button data-color="1,0,0,1">Red</button>
          <button data-color="0,1,0,1">Green</button>
          <button data-color="0,0,1,1">Blue</button>
        </div>
      </model-viewer>
    </div >
  );
}
