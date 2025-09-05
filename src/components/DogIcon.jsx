import React from 'react'

// Composant pour l'icône du chien "cooked"
// Utilise maintenant l'image du meme cooked dog
const DogIcon = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Image du chien "cooked" avec bordure dorée */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-0.5 shadow-lg">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          {/* Image du meme cooked dog */}
          <img
            src="/images/cookeddog.webp"
            alt="Cooked Dog"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />

          {/* Effet de brillance "cooked" */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-200/20 to-orange-300/20 rounded-xl"></div>
        </div>
      </div>

      {/* Effet de lueur externe */}
      <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-sm -z-10 scale-110"></div>
    </div>
  )
}

export default DogIcon
