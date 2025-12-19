# Portfolio Web — WyloW2Ricard0

Application React + TypeScript + Material-UI (MUI) pour présenter mes projets et courses, avec authentification Supabase et base de données.

## 🔗 Lien

- Site public : https://wylow2ricard0.github.io

## 📋 Aperçu

- **Objectif** : présenter mes applications, partager mes courses, et gérer les accès utilisateurs via authentification.
- **Stack** : React 18 + TypeScript + Material-UI v6 + React Router v6 + Supabase (Auth + DB)
- **Hébergement** : GitHub Pages (déploiement automatisé)
- **État global** : Context API pour l'authentification et les données utilisateur
- **Responsive** : Design adapté mobile/tablette/desktop avec MUI

## 🚀 Démarrage rapide

### Prérequis
- Node.js v16+ + npm
- Compte Supabase (gratuit)


### Installation 💻

```bash
# Télécharge Node.js depuis
https://nodejs.org/en/download/

# 1. Clone le repository
git clone https://github.com/WyloW2Ricard0/wylow2ricard0.github.io.git
cd wylow2ricard0.github.io

# 2. Installe les dépendances
npm install --legacy-peer-deps

# Si tu veux corriger les vulnérabilités (optionnel):
npm audit fix

# 3. Crée un fichier .env à la racine du projet
# Voir la section "Configuration Supabase" ci-dessous

# 4. Démarre le serveur de développement
npm start

# Si l'exécution de scripts PowerShell est désactivée
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

L'application démarre automatiquement sur http://localhost:3000 avec **hot reload** !

**Notes:**

- 🔄 Les changements dans `src/` se reflètent instantanément
- 🛑 Pour arrêter: `Ctrl + C` dans le terminal
- 📦 Pour installer les dépendances manquantes: `npm install`

## 🏗️ Architecture

```text
src/
├── components/ # Composants réutilisables (atoms, molecules, organisms)
├── pages/      # Pages principales (Home, Dashboard, Courses, etc.)
├── libs/       # Clients et utilitaires (Supabase)
├── sections/   #
├── hooks/      # Hooks personnalisés
```

Voir [ARCHITECTURE.md](ARCHITECTURE.md) pour les détails complets.

## 📝 Configuration

### Supabase Setup

1. Créer un compte sur https://supabase.com
2. Créer un nouveau projet
3. Copier `SUPABASE_URL` et `SUPABASE_ANON_KEY`
4. Ajouter dans `.env` :
   ```text
   REACT_APP_SUPABASE_URL=https://votre-projet.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=votre-clé-anon
   ```

### Tables Supabase

Exécuter dans l'éditeur SQL Supabase :

```sql
-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(512) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📚 Fonctionnalités

- ✅ Authentification Supabase (Sign In, Sign Up)
- ✅ Routes protégées pour utilisateurs authentifiés
- ✅ Gestion d'état avec Context API
- ✅ Design responsive avec Material-UI
- ✅ TypeScript pour la sécurité des types
- ✅ Intégration Supabase (auth + DB)

## 🔄 Structure des Pages

| URL | Accès | Description |
|-----|-------|-------------|
| `/` | Public | Accueil avec présentation |
| `/sign-in` | Public | Page de connexion |
| `/sign-up` | Public | Page d'inscription |
| `/dashboard` | Authentifié | Tableau de bord personnel |
| `/courses` | Authentifié | Mes courses |
| `/applications` | Authentifié | Mes applications |

## 📖 Documentation

- [SETUP.md](SETUP.md) - Guide complet d'installation et configuration
- [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture détaillée du projet

## 🤝 Contribution

- Le site reste personnel ; les suggestions via Issues sont bienvenues.
- Les Pull Requests sont acceptées au cas par cas (corrections, améliorations).
- Merci de rester conforme au [Code de conduite](CODE_OF_CONDUCT.md).

## 📄 Licence

Contenu sous licence **Attribution-NonCommercial-ShareAlike 4.0 International** — voir [LICENSE.md](LICENSE.md).

## 📞 Contact

- GitHub: [@WyloW2Ricard0](https://github.com/WyloW2Ricard0)
- Email: wrichard@live.fr

---

Fait avec ❤️ par [WyloW2Ricard0](https://github.com/WyloW2Ricard0)

<!--
FIN DU README

CHECKLIST FINALE AVANT PUBLICATION :
- [ ] Tous les liens fonctionnent
- [ ] Les commandes ont été testées
- [ ] Pas de typos ou fautes d'orthographe majeures
- [ ] Les badges affichent les bonnes informations
- [ ] Le fichier LICENSE existe
- [ ] Le CODE_OF_CONDUCT.md existe
- [ ] .gitignore est configuré
- [ ] Structure de répertoires correspond à la documentation
- [ ] Supprimer les commentaires HTML (<!-- -->) en production (ou les garder pour référence)

OUTILS UTILES :
- Vérificateur de liens : https://github.com/tcort/markdown-link-check
- Linter Markdown : https://github.com/markdownlint/markdownlint
- Prévisualisation : VS Code extension "Markdown Preview Enhanced"
- Badges : https://shields.io/
-->
