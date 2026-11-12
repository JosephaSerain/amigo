# Amigo entre amis

Écran de tirage inspiré de l'Amigo de la FDJ, pour jouer entre amis avec des tickets papier.
Pas de base de données ni de serveur applicatif : du HTML, du CSS et du JavaScript.

## Lancer

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Utilisation

- **Espace** ou **▶ Lancer le tirage** : lance un tirage (7 numéros bleus puis 5 jaunes parmi 28).
- **F** ou **⛶** : plein écran.
- **Auto 5 min** : un tirage toutes les 5 minutes ; entre deux tirages, les résultats restent 30 s
  puis les « Brèves du sport » défilent (45 s par écran).
- `#breves` ou `#breves-3` à la fin de l'URL : aperçu des brèves.

## Fichiers

- `index.html` : structure de la page
- `style.css` / `script.js` : écran de tirage
- `slides.css` / `slides.js` : écrans des brèves du sport (contenu modifiable dans `slides.js`)
