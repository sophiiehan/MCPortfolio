import {Experience } from "./components/Experience.js"
import './App.css'
import './index.css';
import { Canvas } from '@react-three/fiber'
import { Overlay } from "./components/TextOverlay.js";
import BuildCard from "./components/BuildCard.js";
import { Scroll } from "@react-three/drei";
import { TextExperience } from "./components/TextExperience.js";

function App() {
  return (
    <div className="flex bg-gray-800 justify-end items-end overflow-hidden">
      {/* <Overlay /> */}

      <div className="flex w-full h-screen">
        <Canvas camera={{
          fov: 50,
          position: [120.3, -0.5, -120.3]
        }}>
            <TextExperience />
        </Canvas>

        <Canvas camera={{
          fov: 50,
          position: [120.3, -0.5, -120.3]
        }}>
          <Experience />
        </Canvas>
       
      </div>
   </div>
  )
}

export default App
