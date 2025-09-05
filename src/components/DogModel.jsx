import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Composant pour le modèle 3D animé du chien
const AnimatedSphere = () => {
  const meshRef = useRef()

  // Animation de rotation continue
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#ee720b"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

// Composant de particules flottantes autour du modèle
const FloatingParticles = () => {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002
    }
  })

  // Création des positions des particules
  const particlePositions = []
  for (let i = 0; i < 50; i++) {
    particlePositions.push(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    )
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={new Float32Array(particlePositions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#f29032"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Composant principal du modèle 3D
const DogModel = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        {/* Éclairage */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#ffffff"
        />
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color="#ee720b"
        />

        {/* Modèle principal */}
        <AnimatedSphere />

        {/* Particules */}
        <FloatingParticles />

        {/* Contrôles (permet de faire tourner la vue avec la souris) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}

export default DogModel
