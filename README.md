# NF Ingénierie — Site internet

Site statique de **NF Ingénierie – Bureau d’études**, conçu pour être publié directement avec GitHub Pages.

## Structure

```text
index.html
contact.html
assets/
  css/
    style.css
  images/
    logo-nf-ingenierie.png
    favicon.png
  js/
    main.js
    contact.js
```

## Modifier le site

- Le contenu de la page d’accueil se trouve dans `index.html`.
- Le contenu de la page de contact se trouve dans `contact.html`.
- Les couleurs, espacements et règles responsive sont centralisés dans `assets/css/style.css`.
- Le menu mobile est géré par `assets/js/main.js`.
- Le formulaire de contact est géré par `assets/js/contact.js`.

## Couleur principale

Le vert historique du site est conservé exactement : `#76cf6d`.

## Formulaire de contact

GitHub Pages étant un hébergement statique, le formulaire n’envoie pas directement les données vers un serveur. Il ouvre le logiciel de messagerie du visiteur avec un e-mail prérempli destiné à `contact@nf-ingenierie.fr`.
