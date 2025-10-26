# Guide de Déploiement

Ce guide vous explique comment déployer votre portfolio sur Vercel.

## Prérequis

- Un compte GitHub
- Un compte Vercel (gratuit)
- Git installé sur votre machine

## Étape 1 : Préparer le repository GitHub

### 1.1 Initialiser Git (si ce n'est pas déjà fait)

```bash
git init
```

### 1.2 Ajouter tous les fichiers

```bash
git add .
```

### 1.3 Créer le premier commit

```bash
git commit -m "Initial commit - Portfolio Cheikhna Mouhamedou Ould"
```

### 1.4 Créer un repository sur GitHub

1. Aller sur [GitHub](https://github.com)
2. Cliquer sur le bouton "+" en haut à droite
3. Sélectionner "New repository"
4. Nommer le repository (ex: "portfolio")
5. Laisser en "Public" ou "Private" selon votre préférence
6. NE PAS initialiser avec README, .gitignore ou LICENSE (vous les avez déjà)
7. Cliquer sur "Create repository"

### 1.5 Lier votre projet local au repository GitHub

```bash
git remote add origin https://github.com/Cheikhna12/portfolio.git
git branch -M main
git push -u origin main
```

## Étape 2 : Déployer sur Vercel

### Méthode 1 : Via l'interface Vercel (Recommandée)

1. Aller sur [Vercel](https://vercel.com)
2. Se connecter avec votre compte GitHub
3. Cliquer sur "Add New..." puis "Project"
4. Importer votre repository GitHub "portfolio"
5. Vercel détectera automatiquement Next.js
6. Configurer les variables d'environnement :
   - `NEXT_PUBLIC_SITE_URL` : https://votre-nom.vercel.app (sera fourni après le déploiement)
   - `NEXT_PUBLIC_EMAIL` : cheickhamed2780@gmail.com
   - `NEXT_PUBLIC_PHONE` : +33774108960
   - `NEXT_PUBLIC_LINKEDIN_URL` : https://www.linkedin.com/in/cheikhna-ould-6a7689232
   - `NEXT_PUBLIC_GITHUB_URL` : https://github.com/Cheikhna12
7. Cliquer sur "Deploy"
8. Attendre 2-3 minutes que le déploiement se termine
9. Votre site sera disponible à l'URL fournie par Vercel

### Méthode 2 : Via Vercel CLI

1. Installer Vercel CLI globalement

```bash
npm install -g vercel
```

2. Se connecter à Vercel

```bash
vercel login
```

3. Déployer depuis le dossier du projet

```bash
vercel
```

4. Suivre les instructions :
   - Set up and deploy? Y
   - Which scope? Votre compte
   - Link to existing project? N
   - What's your project's name? portfolio
   - In which directory is your code located? ./
   - Auto-detected Project Settings (Next.js)
   - Want to override the settings? N

5. Pour déployer en production

```bash
vercel --prod
```

## Étape 3 : Configuration post-déploiement

### 3.1 Configurer le domaine personnalisé (Optionnel)

1. Dans le dashboard Vercel, aller dans Settings > Domains
2. Ajouter votre domaine personnalisé
3. Suivre les instructions pour configurer les DNS

### 3.2 Mettre à jour NEXT_PUBLIC_SITE_URL

1. Dans Vercel, aller dans Settings > Environment Variables
2. Modifier `NEXT_PUBLIC_SITE_URL` avec l'URL de production
3. Redéployer le projet

### 3.3 Activer les Analytics (Optionnel)

1. Dans le dashboard Vercel, aller dans Analytics
2. Activer Vercel Analytics (gratuit)

## Étape 4 : Mises à jour futures

Pour mettre à jour votre portfolio :

1. Faire vos modifications localement
2. Tester avec `npm run dev`
3. Commiter les changements

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

4. Vercel déploiera automatiquement les changements

## Dépannage

### Le build échoue

- Vérifier que `npm run build` fonctionne localement
- Vérifier les logs de build dans Vercel
- Vérifier que toutes les dépendances sont dans package.json

### Les variables d'environnement ne fonctionnent pas

- Vérifier qu'elles commencent par `NEXT_PUBLIC_` pour être accessibles côté client
- Redéployer après avoir ajouté/modifié des variables

### Le site ne se met pas à jour

- Vérifier que le push Git a bien été effectué
- Vérifier dans Vercel > Deployments que le déploiement est terminé
- Vider le cache du navigateur (Ctrl+Shift+R)

## Commandes utiles

```bash
# Vérifier le build localement
npm run build

# Tester la version de production localement
npm run build && npm start

# Voir les logs Vercel
vercel logs

# Lister les déploiements
vercel ls

# Annuler un déploiement
vercel remove [deployment-url]
```

## Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Support Vercel](https://vercel.com/support)

## Contact

En cas de problème, n'hésitez pas à :
- Consulter la documentation Vercel
- Ouvrir une issue sur GitHub
- Me contacter : cheickhamed2780@gmail.com
