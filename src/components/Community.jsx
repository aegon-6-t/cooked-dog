import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Users, Twitter, Send } from 'lucide-react'

// Community Component - Community and social networks section
const Community = () => {
  // Social networks data
  const socialLinks = [
    {
      name: "Telegram",
      icon: <Send className="w-8 h-8" />,
      members: "Active",
      description: "Join the degen chat",
      color: "from-blue-400 to-blue-600",
      link: "#"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8" />,
      members: "Growing",
      description: "Follow the chaos",
      color: "from-sky-400 to-sky-600",
      link: "#"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-8 h-8" />,
      members: "Vibing",
      description: "24/7 cooking sessions",
      color: "from-purple-400 to-purple-600",
      link: "#"
    }
  ]

  // Community testimonials
  const testimonials = [
    {
      name: "RedemptionArc",
      avatar: "👨‍💼",
      text: "Was cooked in Luna, rekt by FTX. COOKED DOG brought me back from the dead.",
      profit: "🚀"
    },
    {
      name: "FromAshesToGains",
      avatar: "🚀",
      text: "Finally found a project that doesn't rug. These devs actually deliver!",
      profit: "💎"
    },
    {
      name: "NoMoreRekt",
      avatar: "💎",
      text: "Holding since day one. This time I'm the one doing the cooking! 🔥",
      profit: "🔥"
    }
  ]

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
            A battle-tested community of survivors who share the same mission:
            turn COOKED DOG into the ultimate revenge trade!
          </p>
        </motion.div>

        {/* Réseaux sociaux */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glow text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {social.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
              <p className="text-gray-400 mb-3">{social.description}</p>
              <div className="text-2xl font-bold text-primary-500">{social.members}</div>
              <div className="text-sm text-gray-500">membres</div>
            </motion.div>
          ))}
        </div>

        {/* Community Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">🤝</div>
            <div className="text-gray-400">Strong Unity</div>
          </div>
          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
            <div className="text-gray-400">Always Active</div>
          </div>
          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">💪</div>
            <div className="text-gray-400">Never Give Up</div>
          </div>
          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">🏆</div>
            <div className="text-gray-400">Redemption Arc</div>
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Ce que dit notre{' '}
            <span className="text-primary-500">Communauté</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary-500 font-bold">{testimonial.profit}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-3xl p-12 border border-primary-500/20"
        >
          <h3 className="text-3xl font-bold mb-4">
            Prêt à rejoindre la révolution ?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ne ratez pas le train ! Rejoignez des milliers d'investisseurs qui ont déjà fait le choix gagnant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Acheter COOKED DOG
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Rejoindre Telegram
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
