# NF Ingénierie — site corrigé octobre 2026

Site statique pour GitHub Pages, sans compilation ni dépendance à installer.

## Mise en ligne

Remplacer le contenu de la racine du dépôt `nf-ingenierie-bureau-etudes.github.io` par **le contenu** de ce dossier (index.html directement à la racine). Conserver les sous-dossiers assets et leurs noms. Aucune modification du domaine n’est nécessaire. Le site ne comporte aucun lien vers un serveur local.

## Activation du formulaire — intervention nécessaire

L’intégration Formspree est prête, mais aucun compte ou formulaire n’a été créé à votre place. Pour activer les envois :

1. Créer un compte gratuit sur https://formspree.io/register et un formulaire « NF Ingénierie ». Choisir **Free**, sans abonnement payant.
2. Définir `contact@nf-ingenierie.fr` comme adresse de réception et la valider avec l’e-mail reçu.
3. Copier l’URL fournie, par exemple `https://formspree.io/f/abcdefgh`. Dans **contact.html**, remplacer `https://formspree.io/f/FORMSPREE_FORM_ID` dans l’attribut `action` du formulaire par cette URL. Il n’y a qu’un seul emplacement à modifier.
4. Publier la page et envoyer un message de test avec votre propre adresse pour vérifier sa réception.

L’offre gratuite vérifiée le 4 octobre 2026 inclut **50 soumissions mensuelles**, l’envoi AJAX et le filtrage anti-spam de base. Les limites s’appliquent au compte ; suivre la consommation dans Formspree. Source : https://formspree.io/plans. Aucun envoi de fichier joint ni accusé de réception automatique par e-mail n’est prévu : la confirmation s’affiche dans la page.

Pour le mode AJAX intégré, désactiver la page reCAPTCHA standard dans les réglages du formulaire si elle empêche l’envoi JSON. Le filtrage de base du service reste utilisable. Restreindre le formulaire au domaine `nf-ingenierie-bureau-etudes.github.io` dans Formspree. Ne pas activer de fonction payante. Le champ piège est vérifié localement dans le JavaScript : il ne repose pas sur la fonction payante « Custom Honeypot » et ne remplace pas les protections du serveur.

Sans identifiant Formspree, la page indique clairement que le formulaire est en cours d’activation ; le bouton est désactivé. Les coordonnées e-mail et téléphone restent disponibles. Sans JavaScript, ces coordonnées permettent également de prendre contact. Après activation, la page valide les champs requis, évite les doubles clics, affiche un état d’envoi, confirme le succès et préserve les données en cas d’erreur. Une coupure réseau peut rendre la réception incertaine ; le message invite alors à la vérifier par contact direct.

## Modifications réalisées

- Sommaire agrandi : numéro et libellé à la même taille, avec ancres vers Expertises, Missions, Missions, Énergie & exploitation.
- Titre des Missions entièrement vert et homogène ; phrase sur le vocabulaire contractuel supprimée.
- 11 photographies locales, optimisées en WebP, avec cadrage 8:5, ALT et chargement différé.
- Numéros en bas au centre des cartes ; suppression de la barre de progression. Fond légèrement plus foncé au survol, au focus et au toucher.
- Fonds blanc, gris ou vert clair ; accents jaunes limités au texte, avec une teinte jaune plus sombre pour préserver sa lisibilité sur fond clair.
- Téléphone ajouté dans les blocs de contact et le pied de page, avec lien tel:.
- Adaptations responsive des grilles, titres, menu, champs de formulaire et espacements. États clavier et réduction des animations conservés.
- Page publique `credits.html` et fichier `CREDITS.md` avec les sources et licences des photos.

Les photos illustrent les services et ne sont pas présentées comme des réalisations du bureau. Les textes métier et la structure générale ont été conservés.

## Fichiers

- `index.html` : accueil
- `contact.html` : formulaire et coordonnées
- `credits.html` / `CREDITS.md` : crédits et licences des photos
- `assets/css/style.css` : styles et responsive
- `assets/js/main.js` : navigation et animations
- `assets/js/contact.js` : validation et envoi Formspree
- `CONTROLES.md` : périmètre et résultats des vérifications
