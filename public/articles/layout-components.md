# Composants de Layout Material-UI : Grid, Box, Stack, Container

Un guide complet pour choisir le bon composant de layout selon votre cas d'usage.

## Table des matières
1. [Container](#container) - Conteneur au largeur fixe
2. [Box](#box) - Boîte de base avec styles
3. [Stack](#stack) - Disposition linéaire (horizontal ou vertical)
4. [Grid](#grid) - Grille responsive 12 colonnes

---

## Container

### Quand l'utiliser ?

- **Page entière** : Wrapper principal pour centrer le contenu
- **Sections avec largeur max** : Blog, articles, landing pages
- **Padding responsive** : Espaces automatiques selon la taille d'écran

### Caractéristiques

- Largeur maximale fixe (par défaut 1200px)
- Centré horizontalement
- Padding responsive intégré
- 4 variantes : `xs`, `sm`, `md`, `lg`, `xl`

### Exemple

```tsx
import Container from '@mui/material/Container';

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1">Mon contenu</Typography>
    </Container>
  );
}
```

### Propriétés importantes

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| false` | `'lg'` | Largeur maximale |
| `fixed` | `boolean` | `false` | Largeur fixe au lieu de responsive |
| `disableGutters` | `boolean` | `false` | Supprime le padding horizontal |

---

## Box

### Quand l'utiliser ?

- **Wrapper générique** : Div stylisé simple
- **Positionnement** : Absolute, relative, fixed
- **Flexbox/Grid perso** : Layouts personnalisés
- **Combinaisons de styles** : Background, borders, shadows

### Caractéristiques

- Boîte basique sans comportement spécial
- Système de styling `sx` complet
- Flexbox par défaut avec `display: flex`
- Pas de limitations

### Exemple

```tsx
import Box from '@mui/material/Box';

export default function Card() {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        backgroundColor: 'background.paper',
        '&:hover': {
          boxShadow: 2,
        },
      }}
    >
      <Typography>Contenu de la carte</Typography>
    </Box>
  );
}
```

### Propriétés importantes

| Prop | Type | Description |
|------|------|-------------|
| `sx` | `SxProps` | Style inline complet |
| `component` | `ElementType` | Élément HTML (défaut: `div`) |
| `display` | `string` | `flex`, `grid`, `block`, etc. |

---

## Stack

### Quand l'utiliser ?

- **Listes verticales** : Menu, navigation, liste d'items
- **Formulaires** : Champs espacés verticalement
- **Boutons groupés** : Boutons horizontaux ou verticaux
- **Espacement uniforme** : Entre enfants uniquement (pas container)

### Caractéristiques

- Flexbox avec direction (row/column)
- Espacement automatique entre enfants (`gap`)
- Responsive (direction peut changer)
- Parfait pour listes et menus

### Exemple

```tsx
import Stack from '@mui/material/Stack';

export default function Form() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 500 }}>
      <TextField label="Nom" />
      <TextField label="Email" />
      <TextField label="Message" multiline rows={4} />
      <Stack direction="row" spacing={1}>
        <Button variant="contained">Envoyer</Button>
        <Button variant="outlined">Annuler</Button>
      </Stack>
    </Stack>
  );
}
```

### Propriétés importantes

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `direction` | `'row' \| 'column'` | `'column'` | Horizontal ou vertical |
| `spacing` | `number \| object` | `0` | Gap entre enfants (en multiples de 8px) |
| `useFlexGap` | `boolean` | `true` (MUI v5+) | Utilise `gap` CSS |

---

## Grid

### Quand l'utiliser ?

- **Layouts multi-colonnes** : Images, cartes, galeries
- **Grille responsive** : 1 col mobile → 3 cols desktop
- **Alignement 2D** : Besoin de contrôle ligne ET colonne
- **Grille 12 colonnes** : Conformité Material Design

### Caractéristiques

- Grille 12 colonnes (peut être personnalisée)
- Responsive avec breakpoints
- Contrôle précis des cols/rows
- Items avec `Grid component`

### Exemple

```tsx
import Grid from '@mui/material/Grid2'; // ou Grid (v1)

export default function Gallery() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>Item 1</Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>Item 2</Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card>Item 3</Card>
      </Grid>
    </Grid>
  );
}
```

### Propriétés importantes (Grid v2)

| Prop | Type | Description |
|------|------|-------------|
| `container` | `boolean` | Parent grille |
| `size` | `object` | Colonnes : `{ xs: 12, sm: 6, md: 4 }` |
| `spacing` | `number` | Gap entre items |
| `direction` | `'row' \| 'column'` | Flux des items |

---

## Comparaison rapide

| Composant | Meilleur pour | Flexibilité | Responsive |
|-----------|--------------|------------|-----------|
| **Container** | Page entière, sections | Faible | Oui |
| **Box** | Styles perso, wrappers | Haute | Oui |
| **Stack** | Listes, menus, formulaires | Moyenne | Oui |
| **Grid** | Galeries, cartes, layouts | Haute | Oui |

---

## Patterns courants

### Pattern 1 : Page complète

```tsx
<Container maxWidth="lg">
  <Header />
  <Box my={4}>
    <Grid container spacing={3}>
      {/* Contenu */}
    </Grid>
  </Box>
  <Footer />
</Container>
```

### Pattern 2 : Formulaire

```tsx
<Box component="form">
  <Stack spacing={2}>
    <TextField label="Champ 1" />
    <TextField label="Champ 2" />
    <Stack direction="row" spacing={1}>
      <Button>Soumettre</Button>
      <Button variant="outlined">Annuler</Button>
    </Stack>
  </Stack>
</Box>
```

### Pattern 3 : Galerie responsive

```tsx
<Container>
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Card>{item.title}</Card>
      </Grid>
    ))}
  </Grid>
</Container>
```

### Pattern 4 : Hero avec image

```tsx
<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 4,
    alignItems: 'center',
  }}
>
  <Box>
    <Typography variant="h2">Titre</Typography>
    <Typography>Description</Typography>
  </Box>
  <Box component="img" src="hero.jpg" sx={{ width: '100%' }} />
</Box>
```

---

## Résumé décisionnel

```
Quelle taille d'écran à gérer ?
├─ Toute la page → Container
│
Besoin d'espacement entre enfants ?
├─ Oui, en ligne ou colonne → Stack
├─ Oui, en grille 2D → Grid
│
Besoin de styles custom avancés ?
├─ Oui → Box
│
Besoin de layout multi-colonnes responsive ?
└─ Oui → Grid
```

---

## Ressources

- [MUI Container Docs](https://mui.com/material-ui/api/container/)
- [MUI Box Docs](https://mui.com/material-ui/api/box/)
- [MUI Stack Docs](https://mui.com/material-ui/api/stack/)
- [MUI Grid Docs](https://mui.com/material-ui/api/grid/)
- [MUI Grid v2 Docs](https://mui.com/material-ui/react-grid2/)
