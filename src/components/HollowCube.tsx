"use client";

import { Suspense, useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance, Text, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import { useAppContext } from "./AppContext";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const CUBE_SIZE = 10;
const HALF = CUBE_SIZE / 2;

function HollowEdges() {
  const steps = 14;
  const edgePositions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const stepSize = CUBE_SIZE / (steps - 1);
    
    // Bottom 4 edges
    for(let i=0; i<steps; i++) {
      const v = -HALF + i * stepSize;
      pos.push([v, -HALF, HALF], [v, -HALF, -HALF]);
      if (i > 0 && i < steps - 1) pos.push([HALF, -HALF, v], [-HALF, -HALF, v]);
    }
    // Top 4 edges
    for(let i=0; i<steps; i++) {
        const v = -HALF + i * stepSize;
        pos.push([v, HALF, HALF], [v, HALF, -HALF]);
        if (i > 0 && i < steps - 1) pos.push([HALF, HALF, v], [-HALF, HALF, v]);
    }
    // Vertical 4 columns
    for(let i=1; i<steps-1; i++) {
        const v = -HALF + i * stepSize;
        pos.push(
            [HALF, v, HALF], [-HALF, v, HALF],
            [HALF, v, -HALF], [-HALF, v, -HALF]
        );
    }
    return pos;
  }, []);

  return (
    <Instances limit={edgePositions.length} castShadow>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshPhysicalMaterial 
        color="#ffffff"
        emissive="#00ff6a"
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
        clearcoat={1}
      />
      {edgePositions.map((pos, i) => (
        <Instance key={i} position={pos} />
      ))}
    </Instances>
  )
}

function FaceWrapper({ position, rotation, serviceId, title, children }: any) {
  const { hoverNode, setHoverNode, activeFace } = useAppContext();
  const router = useRouter();
  const isHovered = hoverNode === serviceId;
  const isActive = activeFace === serviceId;
  const contentRef = useRef<THREE.Group>(null!);
  const glowRef = useRef<THREE.MeshPhysicalMaterial>(null!);

  useEffect(() => {
    if (contentRef.current) {
        gsap.to(contentRef.current.scale, {
            x: isActive ? 1.6 : (isHovered ? 1.1 : 1),
            y: isActive ? 1.6 : (isHovered ? 1.1 : 1),
            z: isActive ? 1.6 : (isHovered ? 1.1 : 1),
            duration: 0.6,
            ease: "power3.out"
        });
    }
    if (glowRef.current) {
        gsap.to(glowRef.current, {
            emissiveIntensity: isActive ? 2 : (isHovered ? 0.8 : 0.1),
            duration: 0.4
        });
    }
  }, [isActive, isHovered]);

  return (
    <group position={position} rotation={rotation}>
      {/* Invisible Hover Hitbox */}
      <mesh 
        position={[0, 0, 0]} 
        visible={false} 
        onPointerOver={(e) => { e.stopPropagation(); setHoverNode(serviceId); }} 
        onPointerOut={() => setHoverNode('none')} 
        onClick={(e) => { 
          e.stopPropagation(); 
          // Map internal ID to URL slug
          const slugMap: Record<string, string> = {
            '3d_design': 'artwork',
            'web_dev': 'web-development',
            'creative': 'twitch-branding',
            'animation': 'animation',
            'publishing': 'digital-publishing',
            'character': 'comics'
          };
          router.push(`/portfolio?cat=${slugMap[serviceId] || serviceId}`);
        }}
      >
        <planeGeometry args={[CUBE_SIZE, CUBE_SIZE]} />
      </mesh>
      
      <group ref={contentRef} position={[0, 0, 0.5]}>
        {/* The primary geometric subject */}
        {children}
        
        {/* Glow backing material proxy (used via effect) */}
        <mesh visible={false}>
            <meshPhysicalMaterial ref={glowRef} emissive="#00ff6a" />
        </mesh>
        
        {/* Title Label */}
        <Text 
            position={[0, -3.5, 0]} 
            fontSize={0.5} 
            color={isActive ? "#00ff6a" : (isHovered ? "#ffffff" : "#666666")} 
            anchorX="center" 
            anchorY="middle" 
            letterSpacing={0.15}
        >
            {title}
        </Text>
      </group>
    </group>
  );
}

function GltfModel({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: any) {
  const gltf = useGLTF(path) as any;
  const scene = gltf.scene;
  const ref = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={ref} position={position} scale={scale} rotation={rotation}>
      <Center top={false}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

const FallbackGeo = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="#00ff6a" wireframe />
  </mesh>
);

function TopGeometry() {
    const groupRef = useRef<THREE.Group>(null!);
    useFrame((state) => {
        const t = state.clock.elapsedTime * 2;
        groupRef.current.children.forEach((child: any, i) => {
            if (child.isMesh) child.position.y = Math.sin(t + i * 0.5) * 0.5;
        });
    });
    return (
        <group ref={groupRef}>
            {Array.from({length: 10}).map((_, i) => (
                <mesh key={i} position={[(i - 4.5) * 0.4, 0, 0]}>
                    <boxGeometry args={[0.3, 0.3, 2]} />
                    <meshPhysicalMaterial color={i % 2 === 0 ? "#00ff6a" : "#fff"} emissive={i % 2 === 0 ? "#00ff6a" : "#000"} emissiveIntensity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

function BackGeometrySafe() {
  const gltf = useGLTF("/models/avatar.glb/scene.gltf") as any;
  const scene = gltf.scene;
  const ref = useRef<THREE.Group>(null!);
  useFrame((state, delta) => { ref.current.rotation.y += delta * 0.3; });
  return (
    <group ref={ref} position={[0, -2, 0]} scale={2.5}>
      <primitive object={scene} />
    </group>
  );
}

function BackGeometry() {
  return (
    <Suspense fallback={
       <group position={[0, 0, 0]}>
         <sphereGeometry args={[1, 16, 16]} />
         <meshStandardMaterial color="#00ff6a" wireframe />
       </group>
    }>
      <BackGeometrySafe />
    </Suspense>
  );
}

function ArtworkGeometry() {
  return (
    <Suspense fallback={<FallbackGeo />}>
      <GltfModel path="/models/artwork/artwork.glb" scale={0.4} position={[0, 0, 0]} />
    </Suspense>
  );
}

function WebDevGeometry() {
  return (
    <Suspense fallback={<FallbackGeo />}>
      <GltfModel path="/models/webdev/webdev.glb" scale={0.25} position={[0, 0, 0]} />
    </Suspense>
  );
}

function TwitchBrandingGeometry() {
  return (
    <Suspense fallback={<FallbackGeo />}>
      <GltfModel path="/models/twitch_logo/scene.gltf" scale={4.5} position={[0, 0.2, 0]} />
    </Suspense>
  );
}

function PublishingGeometry() {
  return (
    <Suspense fallback={<FallbackGeo />}>
      <GltfModel path="/models/ebook/scene.gltf" scale={8} position={[0, 0, 0]} />
    </Suspense>
  );
}

export default function HollowCube() {
  const outerGroup = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (outerGroup.current) {
        outerGroup.current.rotation.y += delta * 0.05;
        outerGroup.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={outerGroup}>
      <HollowEdges />
      
      <FaceWrapper serviceId="3d_design" title="ARTWORK" position={[0, 0, HALF]} rotation={[0, 0, 0]}>
         <ArtworkGeometry />
      </FaceWrapper>
      
      <FaceWrapper serviceId="web_dev" title="WEB & APP DEVELOPMENT" position={[HALF, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
         <WebDevGeometry />
      </FaceWrapper>
      
      <FaceWrapper serviceId="creative" title="TWITCH BRANDING" position={[-HALF, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
         <TwitchBrandingGeometry />
      </FaceWrapper>
      
      <FaceWrapper serviceId="animation" title="ANIMATION" position={[0, HALF, 0]} rotation={[-Math.PI / 2, 0, 0]}>
         <TopGeometry />
      </FaceWrapper>
      
      <FaceWrapper serviceId="publishing" title="DIGITAL PUBLISHING" position={[0, -HALF, 0]} rotation={[Math.PI / 2, 0, 0]}>
         <PublishingGeometry />
      </FaceWrapper>
      
      <FaceWrapper serviceId="character" title="COMICS" position={[0, 0, -HALF]} rotation={[0, Math.PI, 0]}>
         <BackGeometry />
      </FaceWrapper>
    </group>
  );
}
