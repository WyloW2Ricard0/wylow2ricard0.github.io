# Site personnel — WyloW2Ricard0

Dépôt de mon site web personnel hébergé sur GitHub Pages. Vous y trouverez les sources statiques, la configuration de prévisualisation locale et la documentation de maintenance.

## Lien

- Site public : https://wylow2ricard0.github.io

## Aperçu

- Objectif : présenter mon parcours, mes projets et partager quelques notes techniques.
- Pile : HTML/CSS/JS statique (déployé via GitHub Pages), prévisualisation locale via Docker Compose.
- Cible : navigation rapide, contenu léger, sans dépendances côté serveur.

## Démarrage rapide

### Sans Docker

1. Cloner le dépôt :
    ```powershell
    git clone https://github.com/WyloW2Ricard0/wylow2ricard0.github.io.git
    cd wylow2ricard0.github.io
    ```
2. Placer vos fichiers statiques dans le dossier `public/` (créez-le si besoin) puis servir localement :
    ```powershell
    cd public
    python -m http.server 8000
    ```
3. Ouvrir http://localhost:8000.

### Avec Docker (recommandé pour prévisualiser)

1. Vérifier Docker Desktop installé.
2. Depuis la racine :
    ```powershell
    cd config
    docker compose up --build
    ```
3. Ouvrir http://localhost:8080 pour voir le rendu de `public/`.

## Structure du dépôt

```
.
├── README.md                # Présent fichier
├── CHANGLOG.md              # Historique des versions
├── CODE_OF_CONDUCT.md       # Règles de participation
├── CONTRIBUTING.md          # Modalités de contribution
├── LICENSE.md               # Licence du contenu
├── ROADMAP.md               # Cap planifié
├── config/                  # Outils de build/preview (Docker, deps optionnelles)
└── data/                    # Données ou contenus structurés (images, json, brouillons)
```

Notes :
- `config/docker-compose.yml` sert à prévisualiser le site statique avec nginx.
- `config/requirements.txt` reste optionnel pour des scripts de génération (non requis pour afficher le site).
- `data/` peut accueillir images optimisées, json/yaml ou brouillons markdown avant publication.

## Déploiement

- La branche `main` est publiée automatiquement par GitHub Pages.
- Vérifier que les fichiers destinés au web résident dans `public/` (ou à la racine si vous préférez) avant de pousser.
- Pour tester les liens cassés, utilisez un vérificateur local (ex. `linkchecker`) avant publication.

## Contribution

- Le site reste personnel ; les suggestions via Issues sont bienvenues.
- Les Pull Requests sont acceptées au cas par cas (corrections, liens morts, fautes).
- Merci de rester conforme au [Code de conduite](CODE_OF_CONDUCT.md).

## Licence

Contenu sous licence **Attribution-NonCommercial-ShareAlike 4.0 International** — voir `LICENSE.md`.

## Contact

- GitHub : https://github.com/WyloW2Ricard0
- Email : wrichard@live.fr
- **Python** : 3.8+ (pour notebooks)

---

<div align="center">

**📚 Bon apprentissage ! 🚀**

Fait avec ❤️ par [WyloW2Ricard0](https://github.com/WyloW2Ricard0)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/WyloW2Ricard0/Enseignement)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

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
