# avocat_site-web

Site vitrine de Laura Loizel, avocate au barreau de Rouen.

## Developpement local

```sh
npm ci
npm run dev
```

Verifier la version GitHub Pages avec `npm run build`.

## Hebergement OVH Eco Starter

Le site est statique en production : aucun serveur Node.js n'est necessaire chez OVH.

```sh
npm ci
npm run build:ovh
```

Transferer le contenu du dossier `dist/` (et non le dossier lui-meme) dans le repertoire web `www` de l'hebergement OVH. Le site utilise alors `/` comme chemin de base et fonctionne avec un hebergement de fichiers HTML, CSS, JavaScript et images.

Le formulaire de contact actuel affiche une confirmation locale mais n'envoie pas encore les messages. Il faudra le relier a un service de formulaire ou a un script PHP.

Une fois le nom de domaine OVH choisi, remplacer les URL GitHub Pages dans les balises canoniques et Open Graph, ainsi que dans `public/robots.txt` et `public/sitemap.xml`.

## GitHub Pages

Le site est publie sur https://anastasiya145.github.io/avocat_site-web/.
Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`.
Dans les parametres du depot, choisir **Settings > Pages > Build and deployment > GitHub Actions** comme source.
