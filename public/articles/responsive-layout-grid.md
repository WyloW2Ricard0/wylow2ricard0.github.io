---
collected: true
title: "Grille de Layout Responsive - Guide Pratique"
date: "2024-12-18"
category: "Design"
excerpt: "La grille de layout responsive de Material Design adapte automatiquement votre interface à la taille de l'écran pour une expérience cohérente sur tous les appareils."
author:
  name: "Wilfried Richard"
  role: "Auteur"
  avatar: "/images/avatar-wilfried.png"
image: "/images/blog1.jpg"
---
# 📱 Grille de Layout Responsive - Guide Pratique

> **Source officielle** : [Material Design - Responsive Layout Grid](https://m2.material.io/design/layout/responsive-layout-grid.html)

## 🎯 Introduction

La **grille de layout responsive** de Material Design est un système qui adapte automatiquement votre interface en fonction de la taille de l'écran et de l'orientation de l'appareil. Elle assure une cohérence et une fluidité sur tous les appareils : mobile, tablette et desktop.

---

## 1️⃣ Les 3 Éléments Fondamentaux

### 📐 Colonnes (Columns)

Les colonnes sont les zones où le contenu est placé. Leur largeur est définie en **pourcentages**, pas en pixels fixes, ce qui permet au contenu de s'adapter à n'importe quelle taille d'écran.

**Nombre de colonnes selon le breakpoint** :
- 📱 **Mobile (360 dp)** : 4 colonnes
- 📱 **Tablette (600 dp)** : 8 colonnes
- 💻 **Laptop (905 dp+)** : 12 colonnes
- 🖥️ **Desktop (1240 dp+)** : 12 colonnes

```
Exemple : 4 colonnes sur mobile
┌──┬──┬──┬──┐
│  │  │  │  │
└──┴──┴──┴──┘
```

### 🔲 Gouttières (Gutters)

Les gouttières sont les **espaces entre les colonnes**. Elles aident à séparer et organiser le contenu.

**Largeurs de gouttières par breakpoint** :
- 📱 Mobile : **16 dp**
- 📱 Tablette : **24 dp**
- 💻 Laptop/Desktop : **24 dp**

Les gouttières sont **flexibles** : vous pouvez les ajuster (8 dp, 16 dp, 24 dp, 32 dp, 64 dp) selon votre design.

```
Exemple : colonnes avec gouttières
┌──┐   ┌──┐   ┌──┐
│C1├───┤C2├───┤C3│
└──┘   └──┘   └──┘
   16dp ou 24dp
```

### 📏 Marges (Margins)

Les marges sont les **espaces entre le contenu et les bords de l'écran** (gauche/droite).

**Marges par breakpoint** :
- 📱 Mobile (0-599 dp) : **16 dp** (peut augmenter)
- 📱 Tablette (600-904 dp) : **32 dp**
- 💻 Laptop (905-1239 dp) : **Flexible jusqu'à 200 dp max**
- 🖥️ Desktop (1240+ dp) : **Flexible avec max width de 1040 dp**

```
Exemple : marges et contenu
16dp [  Contenu  ] 16dp
```

---

## 2️⃣ Système de Breakpoints

Un **breakpoint** est un point de rupture où la mise en page s'ajuste à la taille de l'écran.

### Tableau des Breakpoints Material Design

| Catégorie | Largeur | Marge | Corps | Colonnes |
|-----------|---------|-------|-------|----------|
| **Extra-small (Téléphone)** | 0-599 dp | 16 dp | Flexible | **4** |
| **Small (Tablette)** | 600-904 dp | 32 dp | Flexible | **8** |
| **Medium (Laptop)** | 905-1239 dp | Flexible | 840 dp | **12** |
| **Medium-Large** | 1240-1439 dp | 200 dp | Flexible | **12** |
| **Large (Desktop)** | 1440+ dp | Flexible | 1040 dp | **12** |

### 📊 Exemple Pratique

```
Mobile (360px)        Tablette (600px)       Desktop (1440px)
4 colonnes           8 colonnes             12 colonnes
16dp marges          32dp marges            200dp marges

┌─┬─┬─┬─┐           ┌───┬───┬───┬───┐      ┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│ │ │ │ │           │   │   │   │   │      │ │ │ │ │ │ │ │ │ │ │ │ │
└─┴─┴─┴─┘           └───┴───┴───┴───┘      └─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
```

---

## 3️⃣ Personnalisation de la Grille

### Ajuster les Gouttières

Les gouttières peuvent être personnalisées pour créer différentes perceptions :

- **8 dp** : Espace étroit → Les éléments semblent liés (galerie d'images)
- **16 dp** : Espacement normal
- **24 dp** : Espacement standard Material Design
- **32 dp** : Espace plus large → Éléments distincts (cartes)
- **64 dp** : Espace très large → Bien séparé (⚠️ à ne pas abuser)

```
Petites gouttières (8dp)    vs    Grandes gouttières (32dp)
┌──┐┌──┐┌──┐                ┌──┐        ┌──┐        ┌──┐
│  ││  ││  │                │  │        │  │        │  │
└──┘└──┘└──┘                └──┘        └──┘        └──┘
(éléments liés)             (éléments séparés)
```

### Gouttières et Marges Différentes

Vous pouvez avoir des **marges différentes des gouttières** au même breakpoint :
- Exemple : Marges 32 dp + Gouttières 8 dp

Cela crée plus d'espace autour du contenu tout en gardant les éléments internes proches.

### Grilles Horizontales

Pour les interfaces tactiles avec scroll horizontal (rare sur web) :
- Les colonnes s'alignent **de gauche à droite** (au lieu de haut en bas)
- La **hauteur de l'écran** détermine le nombre de colonnes
- Utile pour les galeries horizontales

---

## 4️⃣ Anatomie du Layout

Un grand layout responsif se compose de 3 régions principales :

```
┌──────────────────────────────────┐
│      App Bar (Barre d'app)       │ ← Navigation haute
├──────────────────────────────────┤
│ Nav │                            │
│     │      Body (Corps)          │ ← Contenu principal
│     │  (Grille 12 colonnes)      │    avec la grille
│     │                            │
└─────┴────────────────────────────┘
  ↑
Navigation (sidebar)
```

### 1. **App Bar** (Barre d'application)
   - Contient le titre et les actions principales
   - Reste fixe au sommet

### 2. **Navigation** (Barre latérale ou menu)
   - Accès aux sections principales
   - Peut être masquée sur mobile

### 3. **Body** (Région du contenu)
   - **Cœur de la grille responsive**
   - Contient les colonnes, gouttières et marges
   - S'adapte selon le breakpoint

---

## 5️⃣ Implémentation en Code

### Avec Material-UI (React)

```jsx
import { Container, Grid, Box, Paper } from '@mui/material';

export default function ResponsiveLayout() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Grille avec 12 colonnes par défaut */}
      <Grid container spacing={3}>
        {/* Responsive : 12 col mobile, 8 col tablette, 4 col desktop */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Colonne 1</Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Colonne 2</Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Colonne 3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
```

**Breakdown responsive** :
- `xs={12}` : 1 colonne sur mobile (largeur 100%)
- `sm={6}` : 2 colonnes sur tablette (largeur 50%)
- `md={4}` : 3 colonnes sur desktop (largeur 33%)

### Avec CSS Grid Natif

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px; /* gouttière */
  padding: 16px; /* marge */
  max-width: 1040px;
  margin: 0 auto;
}

/* Breakpoints personnalisés */
@media (max-width: 600px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
  }
}

@media (min-width: 600px) and (max-width: 904px) {
  .container {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
    padding: 32px;
  }
}
```

---

## 6️⃣ Bonnes Pratiques ✅

### ✅ À FAIRE

- ✓ Utiliser des **pourcentages** pour les largeurs de colonnes
- ✓ Adapter les **gouttières et marges** au breakpoint
- ✓ Tester sur **au moins 3 tailles** (mobile, tablette, desktop)
- ✓ Laisser **assez d'espace blanc** pour la lisibilité
- ✓ Maintenir la **cohérence** entre les breakpoints
- ✓ Utiliser les **12 colonnes** comme base (flexible en 4, 6, 12)

### ❌ À ÉVITER

- ✗ **Gouttières trop larges** : elles occupent trop d'espace, fragmentent le layout
- ✗ Gouttières = largeur des colonnes : déséquilibré et confus
- ✗ Ignorer l'orientation (portrait/paysage)
- ✗ Espace blanc insuffisant (difficile à lire)
- ✗ Ne pas tester sur mobile
- ✗ Marges constantes sur tous les appareils

---

## 7️⃣ Exemples de Cas d'Usage

### 📰 Blog / Actualités

```
Mobile (4 col)         Tablette (8 col)       Desktop (12 col)
1 article/ligne        2 articles/ligne       3 articles/ligne
```

### 🛍️ E-commerce

```
Mobile : 1 produit par ligne
Tablette : 2-3 produits par ligne
Desktop : 4-5 produits par ligne
```

### 📊 Dashboard

```
Mobile : Empilé verticalement
Tablette : 2 colonnes
Desktop : 3-4 colonnes avec widgets
```

---

## 8️⃣ Ressources

- 📘 **Documentation officielle** : https://m2.material.io/design/layout/responsive-layout-grid.html
- 🎨 **Material Design v3** : https://m3.material.io/
- 🔧 **Material-UI** : https://mui.com/material-ui/react-grid/
- 📱 **CSS Grid Guide** : https://css-tricks.com/snippets/css/complete-guide-grid/

---

## Résumé Rapide 🚀

| Aspect | Mobile | Tablette | Desktop |
|--------|--------|----------|---------|
| **Breakpoint** | 0-599 dp | 600-904 dp | 1240+ dp |
| **Colonnes** | 4 | 8 | 12 |
| **Marge** | 16 dp | 32 dp | 200 dp |
| **Gouttière** | 16 dp | 24 dp | 24 dp |
| **Contenu/ligne** | 1 | 2-3 | 3-4+ |

---

**Créé le** : 13 décembre 2025
**Basé sur** : Material Design v2
