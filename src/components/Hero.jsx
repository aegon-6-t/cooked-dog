import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import Token3D from './Token3D'
import TestToken3D from './TestToken3D'

// Hero Component - Main landing page section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Effets de fond */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
        {/* Contenu textuel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Badge d'introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Zap size={16} className="text-primary-500" />
            <span className="text-sm font-medium text-primary-400">Don't Get Cooked</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              COOKED
            </span>
            <br />
            <span className="text-primary-500">DOG</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg"
          >
            We've all been cooked once. Don't be the dog.
            Join the pack and rise from the ashes! 🔥
          </motion.p>


          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <motion.a
              href="https://flaunch.gg/base/coin/0x8dA2E7a132A837280965a1D496d9c05FD3882d8F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-2 no-underline"
            >
              <span>Buy Now</span>
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <TrendingUp size={20} />
              <span>View Chart</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Token 3D avec le chien "cooked" - responsive et centré */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full flex items-center justify-center"
        >
          {/* Container pour le token 3D avec overflow visible */}
          <div className="w-full h-full relative overflow-visible flex items-center justify-center">
            <Token3D />
          </div>

          {/* Effet de brillance dorée */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
