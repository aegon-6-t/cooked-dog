import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Send, MessageCircle, Mail } from 'lucide-react'
import DogIcon from './DogIcon'

// Composant Footer - Pied de page du site
const Footer = () => {
  // Quick links
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
  ]


  // Social networks
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Telegram', icon: <Send size={20} />, href: '#' },
    { name: 'Discord', icon: <MessageCircle size={20} />, href: '#' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:contact@cookeddog.com' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-16 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <DogIcon size={48} />
              <span className="text-2xl font-bold text-white">COOKED DOG</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              The meme token born from the ashes of every rug pull.
              Join the pack and rise from the flames! 🔥
            </p>

            {/* Adresse du contrat */}
            <div className="bg-dark-700 rounded-2xl p-4 mb-6">
              <div className="text-sm text-gray-400 mb-2">Contract Address:</div>
              <div className="text-primary-500 font-mono text-sm break-all">
                0x8dA2E7a132A837280965a1D496d9c05FD3882d8F
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-700 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Séparateur */}
        <div className="border-t border-dark-700 my-12"></div>

        {/* Copyright et mentions légales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 COOKED DOG Token. All rights reserved.
          </div>

        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
