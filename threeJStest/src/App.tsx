import {Experience } from "./components/Experience.js"
import './App.css'
import './index.css';
import { Canvas } from '@react-three/fiber'
import { Overlay } from "./components/TextOverlay.js";
import BuildCard from "./components/BuildCard.js";

function App() {
  return (
    <div className="flex bg-gray-800 w-screen">
      {/* <Overlay /> */}
      <div className="flex w-2/5 h-screen items-center justify-center ml-48">
        <BuildCard 
          title="Tropical Castle Skeleton" 
          description=
            "This Castle was inspired by a tropical block palette, featuring bright warm colors and a cool turquoise contrast. It features oriental style archways"/>
      </div>

      <div className="flex flex-col w-full h-screen">
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
