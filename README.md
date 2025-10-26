# Portfolio - Cheikhna Mouhamedou Ould

Portfolio de développeur full-stack, développé avec Next.js 15, TypeScript et Tailwind CSS.

## Aperçu

Portfolio mettant en avant mes compétences en développement web full-stack, mes projets et mon expérience professionnelle.

## Fonctionnalités

- Design minimaliste et responsive
- Animations et interactions optimisées
- Performance optimisée (Next.js 15 App Router)
- SEO-friendly
- Formulaire de contact fonctionnel
- Navigation fluide entre les sections

## Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour un code robuste
- **Resend** - Service d'envoi d'emails pour le formulaire de contact

## Installation

### Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn

### Étapes d'installation

1. Cloner le repository

```bash
git clone https://github.com/Cheikhna12/portfolio.git
cd portfolio
```

2. Installer les dépendances

```bash
npm install
# ou
yarn install
```

3. Configurer les variables d'environnement

```bash
cp .env.example .env.local
```

Modifier `.env.local` avec vos propres valeurs :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL=votre-email@example.com
NEXT_PUBLIC_PHONE=+33XXXXXXXXX
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/votre-profil
NEXT_PUBLIC_GITHUB_URL=https://github.com/votre-username
```

4. Lancer le serveur de développement

```bash
npm run dev
# ou
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer une version de production
npm run start    # Démarrer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

### Variables d'environnement sur Vercel

Configurer ces variables dans les paramètres de votre projet Vercel :

- `NEXT_PUBLIC_SITE_URL` : URL de production (ex: https://votre-portfolio.vercel.app)
- `NEXT_PUBLIC_EMAIL` : Votre email
- `NEXT_PUBLIC_PHONE` : Votre numéro de téléphone
- `NEXT_PUBLIC_LINKEDIN_URL` : URL de votre profil LinkedIn
- `NEXT_PUBLIC_GITHUB_URL` : URL de votre profil GitHub
- `RESEND_API_KEY` : Clé API Resend (optionnel, pour le formulaire de contact)

## Structure du projet

```
.
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── api/               # Routes API
├── components/            # Composants React
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── contexts/              # Contextes React
├── public/                # Fichiers statiques
├── .env.example           # Exemple de variables d'environnement
├── next.config.ts         # Configuration Next.js
├── tailwind.config.ts     # Configuration Tailwind CSS
└── tsconfig.json          # Configuration TypeScript
```

## Personnalisation

### Modifier les informations personnelles

1. **Hero Section** : Éditer `components/Hero.tsx`
2. **À propos** : Éditer `components/About.tsx`
3. **Expérience** : Éditer `components/Experience.tsx`
4. **Projets** : Éditer `components/Projects.tsx`
5. **Compétences** : Éditer `components/Skills.tsx`
6. **Contact** : Éditer `components/Contact.tsx`

### Modifier les couleurs et le style

Éditer `tailwind.config.ts` pour personnaliser les couleurs, polices et autres styles.

## Performance

- Optimisation des images avec Next.js Image
- Code splitting automatique
- Lazy loading des composants
- CSS optimisé avec Tailwind CSS
- Animations performantes avec Framer Motion

## SEO

- Métadonnées optimisées
- Open Graph tags
- Sitemap automatique
- Robots.txt configuré

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser comme template pour votre propre portfolio.

## Contact

- Email : cheickhamed2780@gmail.com
- LinkedIn : [Cheikhna Ould](https://www.linkedin.com/in/cheikhna-ould-6a7689232)
- GitHub : [Cheikhna12](https://github.com/Cheikhna12)

## Auteur

**Cheikhna Mouhamedou Ould**

Développeur Full-Stack passionné par la création d'expériences numériques modernes et performantes.
