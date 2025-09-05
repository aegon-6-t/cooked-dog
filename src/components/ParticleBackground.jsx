import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Composant pour les particules flottantes en arrière-plan
const Particles = () => {
  const particlesRef = useRef()
  const particleCount = 100

  // Création des positions aléatoires des particules
  const positions = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20 // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20 // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20 // z

    velocities[i * 3] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
  }

  // Animation des particules
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array

      for (let i = 0; i < particleCount; i++) {
        // Mouvement des particules
        positions[i * 3] += velocities[i * 3]
        positions[i * 3 + 1] += velocities[i * 3 + 1]
        positions[i * 3 + 2] += velocities[i * 3 + 2]

        // Réinitialiser les particules qui sortent de l'écran
        if (Math.abs(positions[i * 3]) > 10) {
          positions[i * 3] = (Math.random() - 0.5) * 20
          velocities[i * 3] = (Math.random() - 0.5) * 0.02
        }
        if (Math.abs(positions[i * 3 + 1]) > 10) {
          positions[i * 3 + 1] = (Math.random() - 0.5) * 20
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        }
        if (Math.abs(positions[i * 3 + 2]) > 10) {
          positions[i * 3 + 2] = (Math.random() - 0.5) * 20
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ee720b"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Composant principal pour l'arrière-plan de particules
const ParticleBackground = () => {
  return (
    <div className="particles">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground
