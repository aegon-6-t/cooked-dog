import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About, { MemeGallery } from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

// Composant principal de l'application
// Il organise tous les autres composants dans une structure de page
function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Arrière-plan avec particules animées */}
      <ParticleBackground />

      {/* Animation d'apparition de la page entière */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* En-tête avec navigation */}
        <Header />

        {/* Section principale (Hero) */}
        <Hero />

        {/* Section À propos */}
        <About />

        {/* Section Galerie de Memes */}
        <MemeGallery />

        {/* Section Communauté */}
        <Community />

        {/* Pied de page */}
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
