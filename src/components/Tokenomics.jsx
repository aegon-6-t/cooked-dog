import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, TrendingUp, Lock, Gift } from 'lucide-react'

// Composant Tokenomics - Informations sur la distribution du token
const Tokenomics = () => {
  // Données de distribution du token
  const tokenomicsData = [
    {
      category: "Vente Publique",
      percentage: 40,
      amount: "400M",
      color: "from-primary-400 to-primary-600",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      category: "Liquidité",
      percentage: 25,
      amount: "250M",
      color: "from-blue-400 to-blue-600",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      category: "Équipe & Développement",
      percentage: 20,
      amount: "200M",
      color: "from-purple-400 to-purple-600",
      icon: <Lock className="w-6 h-6" />
    },
    {
      category: "Marketing & Partenariats",
      percentage: 10,
      amount: "100M",
      color: "from-green-400 to-green-600",
      icon: <Gift className="w-6 h-6" />
    },
    {
      category: "Réserve",
      percentage: 5,
      amount: "50M",
      color: "from-yellow-400 to-yellow-600",
      icon: <Lock className="w-6 h-6" />
    }
  ]

  return (
    <section id="tokenomics" className="py-20 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5"></div>

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
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Distribution transparente et équitable de notre supply total de 1 milliard de tokens COOKED DOG
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Graphique visuel (simplifié) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-dark-800 rounded-3xl p-8 border border-dark-600">
              <h3 className="text-2xl font-bold text-center mb-8">Distribution des Tokens</h3>

              {/* Graphique en barres simplifié */}
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{item.category}</span>
                      <span className="text-sm font-bold text-primary-500">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Détails des catégories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card-glow flex items-center space-x-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{item.category}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{item.percentage}% du supply</span>
                    <span>•</span>
                    <span>{item.amount} tokens</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary-500">
                  {item.percentage}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">1B</div>
            <div className="text-gray-400">Supply Total</div>
          </div>

          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">5%</div>
            <div className="text-gray-400">Tax sur Achat/Vente</div>
          </div>

          <div className="card-glow text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              <div className="inline-block w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                🔥
              </div>
            </div>
            <div className="text-gray-400">Burn Automatique</div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Voir le Contrat sur BSCScan
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Tokenomics
