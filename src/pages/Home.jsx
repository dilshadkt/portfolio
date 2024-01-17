import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../model/Island";
import Sky from "../model/Sky";
import Bird from "../model/Bird";
import Plane from "../model/Plane";
import HomeInfo from "../components/HomeInfo";
import sukura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
const Home = () => {
  const audioRef = useRef(new Audio(sukura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const adjustIslandForScreenSize = () => {
    let screenSclae = null;
    let screenPosition = [0, -6.5, -43];
    let islandRoation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenSclae = [0.9, 0.9, 0.9];
    } else {
      screenSclae = [1, 1, 1];
    }
    return [screenSclae, screenPosition, islandRoation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenSclae, screenPosition;

    if (window.innerWidth < 768) {
      screenSclae = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenSclae = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenSclae, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const [planeScale, planePostion] = adjustPlaneForScreenSize();
  return (
    <section
      className={`w-full h-screen relative ${
        isRotating ? `cursor-grabbing` : `cursor-grab`
      }`}
    >
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen relative"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePostion}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
