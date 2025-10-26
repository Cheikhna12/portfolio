#!/bin/bash

# Script de vérification pré-déploiement
# Ce script vérifie que tout est prêt avant de pousser sur GitHub et Vercel

echo "========================================="
echo "Vérification pré-déploiement"
echo "========================================="
echo ""

# Couleurs pour l'affichage
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteur d'erreurs
ERRORS=0

# 1. Vérifier que Node.js est installé
echo "1. Vérification de Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js installé : $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js n'est pas installé${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. Vérifier que les dépendances sont installées
echo "2. Vérification des dépendances..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules existe${NC}"
else
    echo -e "${YELLOW}⚠ node_modules n'existe pas. Installation...${NC}"
    npm install
fi
echo ""

# 3. Vérifier que le fichier .env.local existe
echo "3. Vérification des variables d'environnement..."
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✓ .env.local existe${NC}"
else
    echo -e "${YELLOW}⚠ .env.local n'existe pas. Copie depuis .env.example...${NC}"
    cp .env.example .env.local
    echo -e "${YELLOW}⚠ Pensez à vérifier les valeurs dans .env.local${NC}"
fi
echo ""

# 4. Linter le code
echo "4. Vérification du code avec ESLint..."
if npm run lint; then
    echo -e "${GREEN}✓ Aucune erreur ESLint${NC}"
else
    echo -e "${RED}✗ Erreurs ESLint détectées${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 5. Build du projet
echo "5. Build du projet..."
if npm run build; then
    echo -e "${GREEN}✓ Build réussi${NC}"
else
    echo -e "${RED}✗ Échec du build${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 6. Vérifier Git
echo "6. Vérification Git..."
if command -v git &> /dev/null; then
    echo -e "${GREEN}✓ Git installé${NC}"
    
    # Vérifier si c'est un repo git
    if git rev-parse --git-dir > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Repository Git initialisé${NC}"
        
        # Vérifier s'il y a des changements non commités
        if git diff-index --quiet HEAD --; then
            echo -e "${GREEN}✓ Aucun changement non commité${NC}"
        else
            echo -e "${YELLOW}⚠ Il y a des changements non commités${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ Pas un repository Git${NC}"
    fi
else
    echo -e "${RED}✗ Git n'est pas installé${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Résumé
echo "========================================="
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ Toutes les vérifications sont passées !${NC}"
    echo -e "${GREEN}Vous pouvez déployer en toute sécurité.${NC}"
    echo ""
    echo "Prochaines étapes :"
    echo "1. git add ."
    echo "2. git commit -m \"Votre message\""
    echo "3. git push origin main"
else
    echo -e "${RED}✗ $ERRORS erreur(s) détectée(s)${NC}"
    echo -e "${RED}Veuillez corriger les erreurs avant de déployer.${NC}"
    exit 1
fi
echo "========================================="
