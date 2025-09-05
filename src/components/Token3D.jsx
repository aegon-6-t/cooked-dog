import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Pièce inspirée du testpiece - avec matériaux multiples et rotation réaliste
const RealisticCoin = () => {
  const coinRef = useRef()

  // Animation de rotation horizontale sur l'axe Y - plus lente
  useFrame(() => {
    if (coinRef.current) {
      coinRef.current.rotation.y += 0.02
    }
  })

  // Chargement de l'image du chien
  const dogTexture = useLoader(THREE.TextureLoader, '/images/cookeddog.webp')

  // Création d'une texture retournée pour la face arrière
  const dogTextureFlipped = dogTexture.clone()
  dogTextureFlipped.wrapS = THREE.RepeatWrapping
  dogTextureFlipped.wrapT = THREE.RepeatWrapping
  dogTextureFlipped.repeat.x = -1 // Retourne horizontalement
  dogTextureFlipped.repeat.y = -1 // Retourne verticalement

  // Matériaux pour les 3 parties de la pièce (bord, face 1, face 2)
  const materials = [
    // Bord de la pièce - or métallique
    new THREE.MeshStandardMaterial({
      color: "#B8860B",
      metalness: 0.7,
      roughness: 0.3
    }),
    // Face avant - image du chien "cooked"
    new THREE.MeshStandardMaterial({
      map: dogTexture,
      metalness: 0.5,
      roughness: 0.4
    }),
    // Face arrière - image du chien retournée
    new THREE.MeshStandardMaterial({
      map: dogTextureFlipped,
      metalness: 0.5,
      roughness: 0.4
    })
  ]

  return (
    <group ref={coinRef}>
      {/* Pièce principale avec 3 matériaux différents */}
      <mesh material={materials} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        <cylinderGeometry args={[3, 3, 0.4, 100]} />
      </mesh>
    </group>
  )
}

// Composant principal - Pièce inspirée du testpiece
const Token3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Éclairage lumineux et neutre */}
        <ambientLight intensity={0.8} color="#ffffff" />

        {/* Lumières blanches sans reflets colorés */}
        <pointLight position={[-2, -2, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[2, 3, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[0, 4, 3]} intensity={1} color="#ffffff" />

        {/* Pièce réaliste */}
        <RealisticCoin />

        {/* Contrôles manuels - rotation uniquement */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Token3D