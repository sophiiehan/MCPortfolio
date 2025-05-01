import { OrbitControls, ScrollControls, Html, Scroll } from "@react-three/drei"
import { useRef } from "react";
import * as THREE from "three";
import { Office } from "./Office.js";
import { MaroonCastle } from "./Castle.js";
import { Overlay } from "./TextOverlay.js";
import { useFrame } from "@react-three/fiber";
import BuildCard from "./BuildCard.js";

// Define and export a React functional component named "Experience"
export const TextExperience = () => {

    const meshRef = useRef<THREE.Mesh>(null); 

    //Constant Rotation of the mesh
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003; 
        }
    })


    return (
        <>
        
            <ambientLight intensity={1} />
            <directionalLight position={[5, 10, -80]} intensity={4} />
            {/* Allows the user to interact with the 3D scene - pan their camera*/}
            <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                target={[20,-15,-80]}    
            />

            {/* "Container" for a geometry shape */}
            <ScrollControls pages={2} damping={0.25}>
                <Scroll html>
                    <div className="flex w-3/4 h-screen items-center justify-center ml-48">
                        <BuildCard 
                            title="Tropical Castle Skeleton" 
                            description="This Castle was inspired by a tropical block palette, featuring bright warm colors and a cool turquoise contrast. It features oriental style archways"
                            />
                    </div>
                </Scroll>
            </ScrollControls>
        </>

    );
}

