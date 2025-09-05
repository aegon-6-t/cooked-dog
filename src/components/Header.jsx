import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import DogIcon from './DogIcon'

// Composant Header - Barre de navigation en haut de la page
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effet pour détecter le scroll et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 flex justify-center pt-6"
    >
      {/* Barre transparente avec flou - responsive */}
      <div className={`
        bg-black/20 backdrop-blur-xl border border-white/10 
        rounded-full px-4 sm:px-8 py-3 transition-all duration-300 mx-4 sm:mx-0
        ${isScrolled ? 'bg-black/30 border-white/20' : 'bg-black/10'}
      `}>
        <div className="flex items-center justify-between gap-2 sm:gap-8">
          {/* Logo - responsive */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <DogIcon size={32} className="sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-xl font-bold text-white">COOKED DOG</span>
          </motion.div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Bouton d'action - responsive */}
          <motion.a
            href="https://flaunch.gg/base/coin/0x8dA2E7a132A837280965a1D496d9c05FD3882d8F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary-500/90 hover:bg-primary-500 text-white font-semibold px-4 lg:px-6 py-2 rounded-full text-sm transition-all duration-300 no-underline"
          >
            Buy Now
          </motion.a>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu mobile - améliorer l'affichage */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-4 right-4 lg:hidden z-40"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-6 shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ scale: 1.02 }}
                  className="text-white/90 hover:text-white transition-colors duration-300 text-center py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://flaunch.gg/base/coin/0x8dA2E7a132A837280965a1D496d9c05FD3882d8F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full text-sm mt-2 transition-colors duration-300 no-underline text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Now
              </motion.a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
