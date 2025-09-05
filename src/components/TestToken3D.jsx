import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Version de test ultra-simple pour diagnostiquer les problèmes
const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ee720b" />
    </mesh>
  )
}

const TestToken3D = () => {
  return (
    <div className="w-full h-full bg-dark-800 rounded-3xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingCube />
      </Canvas>
    </div>
  )
}

export default TestToken3D
