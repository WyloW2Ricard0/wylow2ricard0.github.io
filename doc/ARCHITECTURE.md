# Architecture & Next Steps

## Structure Créée ✅

```
wylow2ricard0.github.io/
├── src/
│   ├── App.tsx                     # App principal avec routing
│   ├── index.tsx                   # Point d'entrée
│   │
│   ├── assets/
│   │   ├── images/                 # Images (à ajouter)
│   │   ├── icons/                  # Icônes (à ajouter)
│   │   └── articles/               # Articles Markdown (YYYY-MM-DD-titre.md)
│   │
│   ├── components/
│   │   ├── atoms/                  # Composants basiques (Button, Input, etc.)
│   │   ├── molecules/              # Compositions (Card, Form, etc.)
│   │   ├── organisms/
│   │   │   ├── Header.tsx          # Barre de navigation
│   │   │   └── Footer.tsx          # Pied de page
│   │   ├── templates/              # Templates MUI (à intégrer)
│   │   └── layouts/
│   │       ├── MainLayout.tsx      # Layout principal
│   │       └── AuthLayout.tsx      # Layout authentification
│   │
│   ├── contexts/
│   │   └── AuthContext.tsx         # Gestion authentification (Context API)
│   │
│   ├── hooks/
│   │   ├── useProtectedRoute.ts    # Protection des routes
│   │   └── index.ts
│   │
│   ├── lib/
│   │   └── supabase.ts             # Client Supabase
│   │
│   ├── pages/
│   │   ├── Home.tsx                # Accueil
│   │   ├── SignIn.tsx              # Connexion
│   │   ├── SignUp.tsx              # Inscription
│   │   ├── Dashboard.tsx           # Tableau de bord
│   │   ├── Courses.tsx             # Mes cours
│   │   ├── Applications.tsx        # Mes applications
│   │   └── NotFound.tsx            # 404
│   │
│   ├── styles/                     # Fichiers CSS/SCSS globaux
│   ├── types/
│   │   └── index.ts                # Types TypeScript
│   │
├── public/
│   └── index.html                  # HTML principal
│
├── package.json                    # Dépendances (à installer)
├── tsconfig.json                   # Configuration TypeScript
├── .env.example                    # Variables d'environnement (à configurer)
└── SETUP.md                        # Guide de configuration

```

## Prochaines Étapes

### Phase 1: Installation & Configuration ⚙️

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Créer un compte Supabase**
   - Aller sur https://supabase.com
   - Créer un nouveau projet
   - Récupérer: `SUPABASE_URL` et `SUPABASE_ANON_KEY`

3. **Configurer .env**
   ```bash
   cp .env.example .env
   ```
   Puis ajouter vos credentials Supabase

4. **Tester en développement**
   ```bash
   npm start
   ```

### Phase 2: Créer les Tables Supabase 🗄️

Exécuter dans l'éditeur SQL Supabase:

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

-- Row-level security (optionnel)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
```

### Phase 3: Intégrer les Templates MUI 🎨

Vous pouvez maintenant:

1. **Importer des composants MUI** dans vos pages
2. **Adapter les templates** de: https://github.com/mui/material-ui/tree/v7.3.6/docs/data/material/getting-started/templates
3. Utiliser les composants pour construire vos pages (Dashboard, Courses, Applications)

Exemple pour une page de cours:
```typescript
// src/pages/Courses.tsx
import { Card, CardContent, Grid, Typography } from '@mui/material';

const Courses: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Mon Cours</Typography>
            <Typography variant="body2">Description...</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
```

### Phase 4: Ajouter Contenu & Fonctionnalités 📝

1. **Articles de blog** → Ajouter fichiers .md dans `src/assets/articles/`
2. **Courses** → Créer composants pour afficher les données Supabase
3. **Applications** → Ajouter liens vers vos repos externes
4. **Personnalisation** → Ajuster le thème MUI (couleurs, fonts)

### Phase 5: Déploiement sur GitHub Pages 🚀

```bash
# Build production
npm run build

# Déployer
npm run deploy
```

Site actif sur: https://wylow2ricard0.github.io

## Architecture de Routage

```
/                 → Home (Public)
/sign-in          → Connexion
/sign-up          → Inscription
/dashboard        → Tableau de bord (Authentifié)
/courses          → Mes cours (Authentifié)
/applications     → Mes applications (Authentifié)
```

## État Global (Context API)

L'authentification est gérée via `AuthContext`:
- `user` - Utilisateur connecté
- `loading` - État de chargement
- `error` - Messages d'erreur
- `signIn()` - Connexion
- `signUp()` - Inscription
- `signOut()` - Déconnexion

Utilisation:
```typescript
import { useAuth } from '@contexts/AuthContext';

const MyComponent: React.FC = () => {
  const { user, signOut } = useAuth();
  // ...
};
```

## Notes Importantes

- ✅ TypeScript activé pour la sécurité des types
- ✅ Context API pour état global (pas Redux)
- ✅ React Router v6 pour le routage
- ✅ MUI sans personnalisation CSS (pour l'instant)
- ✅ Prêt pour GitHub Pages
- ✅ Supabase auth + DB intégrés

## Support

Pour toute question sur l'architecture ou l'intégration, consultez:
- [MUI Docs](https://mui.com)
- [React Router Docs](https://reactrouter.com)
- [Supabase Docs](https://supabase.com/docs)
- [React Context API](https://react.dev/reference/react/useContext)
