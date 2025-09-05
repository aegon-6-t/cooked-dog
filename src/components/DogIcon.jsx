import React from 'react'

// Composant pour l'icône du chien "cooked"
// Cette image représente le meme du chien avec un look "cuit" au soleil
const DogIcon = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Image du chien avec effet de brillance */}
      <div
        className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-1 shadow-lg"
      >
        <div
          className="w-full h-full rounded-xl bg-gradient-to-br from-amber-100 via-orange-200 to-orange-300 flex items-center justify-center overflow-hidden relative"
        >
          {/* Représentation stylisée du chien "cooked" */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Tête du chien */}
            <div className="relative">
              {/* Oreilles */}
              <div className="absolute -top-2 -left-3 w-3 h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full transform -rotate-45"></div>
              <div className="absolute -top-2 -right-3 w-3 h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full transform rotate-45"></div>

              {/* Tête principale */}
              <div className="w-8 h-7 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 rounded-2xl relative">
                {/* Yeux */}
                <div className="absolute top-2 left-1.5 w-1 h-1 bg-black rounded-full"></div>
                <div className="absolute top-2 right-1.5 w-1 h-1 bg-black rounded-full"></div>

                {/* Museau */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gradient-to-b from-amber-600 to-amber-700 rounded-xl">
                  {/* Nez */}
                  <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Effet de brillance "cooked" */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-200/30 to-orange-300/40 rounded-xl"></div>

          {/* Reflet de lumière dorée */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-100/60 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Effet de lueur externe */}
      <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-sm -z-10 scale-110"></div>
    </div>
  )
}

export default DogIcon
