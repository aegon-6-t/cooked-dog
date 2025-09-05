import React from 'react'
import { motion } from 'framer-motion'

// About Component - About the token section
const About = () => {

  return (
    <section id="about" className="py-20 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section histoire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Texte aligné à gauche */}
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Story
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
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
              className="btn-primary mt-12"
            >
              Join The Pack
            </motion.button>
          </div>

          {/* Image à côté */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/images/cookeddog.webp"
                alt="Cooked Dog Meme"
                className="w-96 h-96 object-cover rounded-3xl shadow-2xl"
              />
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-yellow-400/20 rounded-3xl"></div>
              {/* Bordure dorée */}
              <div className="absolute inset-0 border-2 border-primary-500/30 rounded-3xl"></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

// Nouvelle section Galerie de Memes
const MemeGallery = () => {
  const memes = [
    { src: "/memes/a56rom.jpg", alt: "Cooked Dog Meme 1", size: "large" },
    { src: "/memes/dooggg.png", alt: "Cooked Dog Meme 2", size: "medium" },
    { src: "/memes/doooogge.png", alt: "Cooked Dog Meme 3", size: "small" },
    { src: "/memes/G0FhQBBWsAA-I87.jpeg", alt: "Cooked Dog Meme 4", size: "medium" },
    { src: "/memes/G0FLLq1WMAAj8f_.jpeg", alt: "Cooked Dog Meme 5", size: "large" },
    { src: "/memes/Cooked-logo-solana.jpg", alt: "Cooked Dog Logo", size: "small" },
    { src: "/memes/assets2Ftask_01k4d0fxwvehdvf4yp8ws3kcdt2F1757078561_img_0.png", alt: "Cooked Dog AI 1", size: "medium" },
    { src: "/memes/assets2Ftask_01k4d0tj9qe5trb75jpkbekrht2F1757078840_img_1.png", alt: "Cooked Dog AI 2", size: "small" }
  ]

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-3'  // Plus grand pour éviter les coupures
      case 'medium':
        return 'md:col-span-1 md:row-span-2'
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  const getImageStyle = (src) => {
    // Définir la position de l'objet pour éviter de couper le texte important
    const imageConfigs = {
      "/memes/a56rom.jpg": { height: "h-96 md:h-[28rem]", objectPosition: "object-[center_20%]" }, // Léger décalage vers le haut
      "/memes/dooggg.png": { height: "h-80 md:h-96", objectPosition: "object-[center_15%]" }, // Texte souvent en haut
      "/memes/doooogge.png": { height: "h-56 md:h-64", objectPosition: "object-center" },
      "/memes/G0FhQBBWsAA-I87.jpeg": { height: "h-72 md:h-80", objectPosition: "object-[center_25%]" },
      "/memes/G0FLLq1WMAAj8f_.jpeg": { height: "h-88 md:h-[26rem]", objectPosition: "object-[center_30%]" },
      "/memes/Cooked-logo-solana.jpg": { height: "h-48 md:h-56", objectPosition: "object-center" },
      "/memes/assets2Ftask_01k4d0fxwvehdvf4yp8ws3kcdt2F1757078561_img_0.png": { height: "h-64 md:h-72", objectPosition: "object-[center_15%]" },
      "/memes/assets2Ftask_01k4d0tj9qe5trb75jpkbekrht2F1757078840_img_1.png": { height: "h-60 md:h-68", objectPosition: "object-[center_20%]" }
    }

    return imageConfigs[src] || { height: "h-56 md:h-64", objectPosition: "object-center" }
  }

  return (
    <section className="py-20 relative">
      {/* Effet de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-primary-500/10"></div>

      <div className="container mx-auto px-6">
        {/* Titre de la section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Best{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Memes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Community-created masterpieces that capture the COOKED DOG spirit
          </p>
        </motion.div>

        {/* Mosaïque de memes avec tailles variables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-min"
        >
          {memes.map((meme, index) => {
            const imageStyle = getImageStyle(meme.src)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`relative group cursor-pointer ${getSizeClass(meme.size)} ${imageStyle.height}`}
              >
                <img
                  src={meme.src}
                  alt={meme.alt}
                  className={`w-full h-full object-cover ${imageStyle.objectPosition} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  loading="lazy"
                />

                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bordure dorée au hover */}
                <div className="absolute inset-0 border-2 border-primary-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Icône de zoom au hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Got a fire meme? Share it with the pack! 🔥
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
export { MemeGallery }
