import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, Target } from 'lucide-react'

// About Component - About the token section
const About = () => {
  // Features data
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Unruggable",
      description: "Contract audited by top security experts. No more getting cooked by rugpulls."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Ultra-fast transactions. Don't get left behind when the pump starts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strong Pack",
      description: "A loyal community that sticks together. We don't abandon our own."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "Turn every cooked dog into a top dog. Rise from the ashes."
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              COOKED DOG
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            COOKED DOG isn't just a token, it's a comeback story.
            From cooked to cooking. From rekt to wrecking. Join the redemption arc.
          </p>
        </motion.div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card-glow text-center group"
            >
              <div className="text-primary-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Section histoire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Texte */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary-500">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                COOKED DOG was born from the ashes of every rug pull, every failed promise,
                every "diamond hands" that turned to dust. We've all been there - cooked,
                rekt, left holding worthless bags.
              </p>
              <p>
                But this time it's different. This time WE are the ones doing the cooking.
                Our community is built on survivors who learned the hard way. We know the game,
                we know the tricks, and we know how to win.
              </p>
              <p>
                Join the pack of battle-tested degenerates who turned their pain into gains.
                From cooked dogs to alpha wolves. This is our redemption arc.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Join The Pack
            </motion.button>
          </div>

          {/* Visual element - Meme image or illustration */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card-glow p-8 text-center"
            >
              <div className="text-6xl mb-4">🔥</div>
              <h4 className="text-xl font-bold text-primary-500 mb-2">From Cooked to Cooking</h4>
              <p className="text-gray-400">Check live stats on your favorite DEX</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
