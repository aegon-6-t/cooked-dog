import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Version simplifiée du token 3D en cas de problème
const SimpleTokenCoin = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={meshRef}>
      {/* Token principal - cylindre */}
      <mesh>
        <cylinderGeometry args={[2, 2, 0.3, 32]} />
        <meshStandardMaterial
          color="#ee720b"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Face avant */}
      <mesh position={[0, 0, 0.16]}>
        <cylinderGeometry args={[1.8, 1.8, 0.05, 32]} />
        <meshStandardMaterial
          color="#f29032"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Représentation simple du chien - sphère principale */}
      <mesh position={[0, 0.2, 0.2]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color="#8B4513"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Museau */}
      <mesh position={[0, 0, 0.45]}>
        <sphereGeometry args={[0.25, 12, 12]} />
        <meshStandardMaterial
          color="#D2691E"
          metalness={0.2}
          roughness={0.6}
        />
      </mesh>
    </group>
  )
}

const SimpleToken3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ee720b" />

        <SimpleTokenCoin />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  )
}

export default SimpleToken3D
