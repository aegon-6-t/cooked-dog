# 🐕 COOKED DOG Token - Site Vitrine

Un site vitrine moderne et minimaliste pour promouvoir le token COOKED DOG, développé avec React, Tailwind CSS et Three.js.

## ✨ Fonctionnalités

- **Design moderne et minimaliste** avec des bords arrondis
- **Animations 3D** avec Three.js pour une expérience immersive
- **Responsive design** optimisé pour tous les écrans
- **Animations fluides** avec Framer Motion
- **Interface utilisateur intuitive** et accessible

## 🛠️ Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Three.js** - Bibliothèque 3D pour le web
- **@react-three/fiber** - Renderer React pour Three.js
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build pour la production
```bash
npm run build
```

### Prévisualisation du build de production
```bash
npm run preview
```

## 📱 Sections du Site

1. **Header** - Navigation avec menu responsive
2. **Hero** - Section d'accueil avec modèle 3D et statistiques
3. **About** - Présentation du token et de ses avantages
4. **Tokenomics** - Distribution et informations techniques
5. **Community** - Réseaux sociaux et témoignages
6. **Footer** - Liens utiles et informations légales

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Primary : Orange (#ee720b)
- Dark : Tons de gris foncé pour le thème sombre

### Animations
Les animations 3D sont configurées dans les composants :
- `DogModel.jsx` - Modèle 3D principal
- `ParticleBackground.jsx` - Particules d'arrière-plan

### Contenu
Modifiez le contenu dans les fichiers de composants respectifs :
- Textes et descriptions
- Statistiques et chiffres
- Liens vers les réseaux sociaux

## 📦 Structure du Projet

```
src/
├── components/
│   ├── Header.jsx          # Barre de navigation
│   ├── Hero.jsx           # Section principale
│   ├── About.jsx          # À propos du token
│   ├── Tokenomics.jsx     # Informations tokenomics
│   ├── Community.jsx      # Section communauté
│   ├── Footer.jsx         # Pied de page
│   ├── DogModel.jsx       # Modèle 3D
│   └── ParticleBackground.jsx # Arrière-plan animé
├── App.jsx                # Composant principal
├── main.jsx              # Point d'entrée
└── index.css             # Styles globaux
```

## 🔧 Configuration

### Vite Configuration
Le fichier `vite.config.js` configure :
- Le plugin React
- Le serveur de développement sur le port 3000
- L'ouverture automatique du navigateur

### Tailwind Configuration
Le fichier `tailwind.config.js` configure :
- Les couleurs personnalisées
- Les animations
- Les bordures arrondies étendues
- La police Inter

## 🌟 Fonctionnalités Avancées

- **Scroll fluide** entre les sections
- **Animations au scroll** avec Intersection Observer
- **Menu mobile** responsive
- **Effets de hover** interactifs
- **Particules animées** en arrière-plan
- **Modèle 3D rotatif** avec contrôles

## 📱 Responsive Design

Le site est optimisé pour :
- **Desktop** (1024px et plus)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## ⚠️ Notes Importantes

- Ce projet est à des fins éducatives et de démonstration
- Les statistiques et données sont fictives
- Adaptez le contenu selon vos besoins réels
- Testez toujours sur différents navigateurs et appareils

## 🤝 Contribution

Pour contribuer au projet :
1. Forkez le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Développé avec ❤️ pour la communauté crypto
# cooked-dog
