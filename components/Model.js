import '@google/model-viewer';

function Model (path) {
  return (
  
  <div>
  <model-viewer
    src={path.src}
    ios-src={path.ios}
    // alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
);
  }

export default Model;