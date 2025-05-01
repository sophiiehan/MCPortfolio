import { OrbitControls, ScrollControls } from "@react-three/drei"
import { useRef } from "react";
import * as THREE from "three";
import { Office } from "./Office.js";
import { MaroonCastle } from "./Castle.js";
import { Overlay } from "./TextOverlay.js";
import { useFrame } from "@react-three/fiber";

// Define and export a React functional component named "Experience"
export const Experience = () => {

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
            <ScrollControls pages={3} damping={0.25}>

                <mesh ref={meshRef} position={[20,-45,-80]}>
                    <MaroonCastle />
                </mesh>
            </ScrollControls>
        </>

    );

// Removed the incorrect custom useRef implementation
}

