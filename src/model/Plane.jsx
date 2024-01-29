import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import plansound from "../assets/plane.mp3";
const Plane = ({ isRotating, ...props }) => {
  const audioRef = useRef(new Audio(plansound));
  audioRef.current.volume = 0.4;
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
      audioRef.current.play();
    } else {
      actions["Take 001"].stop();
      audioRef.current.pause();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
