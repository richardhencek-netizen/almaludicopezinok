# Alma Ludico Pezinok – web

Web detského centra Alma Ludico Pezinok (deti od 4 mesiacov do 4 rokov), dizajn podľa Alma Ludico dizajn manuálu v2.

## Úprava textov
Texty sa upravujú v adminovi **Pages CMS** (https://app.pagescms.org) – nastavenie je v `.pages.yml`.
Každá sekcia webu má vlastný súbor v `src/_data/*.yml`. Po uložení Netlify web sám zverejní (cca 1 min).

## Štruktúra
- `src/index.njk`, `src/dakujeme.njk` – šablóny (Eleventy + Nunjucks)
- `src/_includes/base.njk` – hlavička, pätička
- `src/_data/` – obsah (texty, ceny, tím, kontakty)
- `src/style.css`, `src/main.js` – dizajn a správanie
- `src/img/` – fotky (sem ukladá aj admin)
- `src/fonts/` – Jost (SIL OFL)

## Lokálne
```
npm install
npm start
```
Nasadenie: Netlify (build `npm run build`, publish `_site`) – nastavené v `netlify.toml`.
