import '@google/model-viewer';

function Model (path) {
  return (
  
  <div>
  <model-viewer
    src={path.src}
    ios-src={path.ios}
    // alt="A 3D model of an astronaut"
    ar-modes
    shadow-intensity="0.2"
    shadow-softness="0.5"
    camera-controls
    max-camera-orbit="auto 100deg auto"
    auto-rotate
    ar
  ></model-viewer>
</div>
);
  }

export default Model;