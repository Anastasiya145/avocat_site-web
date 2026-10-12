# avocat_site-web

Site vitrine de Laura Loizel, avocate au barreau de Rouen.

## Developpement local

```sh
npm ci
npm run dev
```

Verifier la version de production avec `npm run build`.

## GitHub Pages

Le site est publie sur https://anastasiya145.github.io/avocat_site-web/.
Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`.
Dans les parametres du depot, choisir **Settings > Pages > Build and deployment > GitHub Actions** comme source.
