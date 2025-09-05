import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart } from 'lucide-react'

// Community Component - Simplified with only essential links
const Community = () => {

  return (
    <section id="community" className="py-20 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-primary-500/10"></div>

      <div className="container mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join The{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Pack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to rise from the ashes? Connect with us and get your COOKED DOG tokens!
          </p>
        </motion.div>

        {/* Liens essentiels */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* GeckoTerminal - Live Stats */}
          <motion.a
            href="https://www.geckoterminal.com/fr/base/pools/0x70606c07986eff00efb8ce1e7d325cd6f537e0f21f7991a9ad6ed8d290f34fa3"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-glow text-center group cursor-pointer bg-gradient-to-br from-green-500/10 to-green-600/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <ExternalLink className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-green-400">Live Stats</h3>
            <p className="text-gray-300 mb-4">View real-time data</p>
            <div className="text-sm text-green-400 font-semibold">geckoterminal.com</div>
          </motion.a>

          {/* Flaunch - Buy Token */}
          <motion.a
            href="https://flaunch.gg/base/coin/0x8dA2E7a132A837280965a1D496d9c05FD3882d8F"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-glow text-center group cursor-pointer bg-gradient-to-br from-primary-500/10 to-primary-600/20 border-primary-500/30 hover:border-primary-400/50 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-primary-400">Buy COOKED DOG</h3>
            <p className="text-gray-300 mb-4">Get your tokens on Flaunch</p>
            <div className="text-sm text-primary-400 font-semibold">flaunch.gg</div>
          </motion.a>
        </div>

        {/* Message d'encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't be the dog that gets cooked. Join the pack and turn your losses into gains! 🔥
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
