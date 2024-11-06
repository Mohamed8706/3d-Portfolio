import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Tilt from "react-parallax-tilt";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
<hemisphereLight intensity={0.15} groundColor='black' />
<spotLight
  position={[0, 10, 0]}  // Place it closer to the model
  angle={1}             // Wider angle to ensure it covers the model
  penumbra={1}          // Softer shadow edges
  intensity={1000}           // Higher intensity
  castShadow
  shadow-mapSize={1024}   
/>

<pointLight intensity={1} /> // Positioned slightly to the side
<directionalLight
  intensity={1} // Lower intensity for subtle fill light
  position={[5, 10, 5]}
  castShadow
/>
<primitive
  object={computer.scene}
  scale={isMobile ? 0.47 : 0.69}
  position={isMobile ? [0, -3.2, -0.8] : [0, -3, -1.5]}
  rotation={[-0.01, -0.2, -0.1]}
  castShadow
  receiveShadow
/>

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader  />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;