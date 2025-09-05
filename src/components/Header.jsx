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
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 flex justify-center pt-6"
    >
      {/* Barre transparente avec flou - largeur limitée */}
      <div className={`
        bg-black/20 backdrop-blur-xl border border-white/10 
        rounded-full px-8 py-3 transition-all duration-300
        ${isScrolled ? 'bg-black/30 border-white/20' : 'bg-black/10'}
      `}>
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <DogIcon size={40} />
            <span className="text-xl font-bold text-white">COOKED DOG</span>
          </motion.div>

          {/* Navigation desktop compacte */}
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

          {/* Bouton d'action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500/90 hover:bg-primary-500 text-white font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300"
          >
            Buy Now
          </motion.button>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu mobile - en dehors de la barre */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 lg:hidden"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 min-w-[200px]">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-primary-500 text-white font-semibold px-4 py-2 rounded-full text-sm mt-2">
                Buy Now
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
