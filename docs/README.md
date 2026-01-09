# Documentation

## Vue d'ensemble

Ce dossier regroupe les documents de suivi (changelogs, commits, guides).

## Structure

```text
docs/
  README.md
  changlogs/
    0-0-1.md            ← initialisation du projet
    unreleased.md      ← ajout Vercel (à compléter)
  commits/
    commit0.md          ← ajout des dépendances (package.json)
    unreleased.md       ← structure pages et tests
```

## Conventions

- Commits: Conventional Commits (feat, fix, chore, docs)
- Changelog: Keep a Changelog (Ajouté, Modifié, Corrigé)

## Liens utiles

## 🎨 Configuration formatage

- **Indentation** : 2 espaces
- **Longueur ligne** : 80 caractères max
- **Guillemets** : Simple quotes (`'`)
- **Point-virgule** : Non obligatoire
- **Fin de ligne** : LF (Linux/Mac/Windows compatible)

## 📚 Documentation complète

- **React** : https://react.dev
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- npm package.json: https://docs.npmjs.com/cli/v9/configuring-npm/package-json

## 🌳 Branches

- `main` : Production (déploiement Vercel)
- `dev` : Développement actif

1. Rédiger le commit dans `docs/commits/`
2. Appliquer les changements dans le code
3. Tester (`dev`, `build`, `lint`)
4. Mettre à jour `docs/changlogs/`
5. Fusionner vers `main` pour déploiement Vercel
