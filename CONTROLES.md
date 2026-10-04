# Contrôles avant livraison

Les modifications ont été réalisées sur les fichiers du ZIP fourni. Aucune publication sur GitHub ni création de compte externe n’a été effectuée.

## Contrôles effectués

- Accueil, Contact et Crédits : lecture de tous les fichiers HTML et contrôle des ressources référencées, des identifiants et des liens internes. Aucune ressource locale manquante et aucun identifiant dupliqué détectés.
- Sommaire : correspondances vérifiées dans le HTML — 01 vers Expertises, 02 et 03 vers Missions, 04 vers Énergie & exploitation.
- Décalage des ancres : scroll-padding-top tient compte de la hauteur du header et de 20 px supplémentaires. Scroll fluide, désactivé par prefers-reduced-motion.
- Photographies : 11 fichiers WebP décodés avec succès, dimensions identiques de 960 × 600 pixels, cadrage 8:5, ALT, width/height, lazy-loading et decoding async. Leur poids cumulé est de 734 606 octets, soit environ 717 Ko. Sources et licences dans CREDITS.md et credits.html.
- Téléphone : liens tel:+33651828687 présents sous l’e-mail dans le bloc projet et les coordonnées de la page Contact. Le pied de page de l’accueil comporte aussi le téléphone.
- Palette : styles des fonds principaux blanc/gris/vert clair ; fonds noirs et jaunes directs retirés. Les photos et le logo conservent leurs couleurs propres.
- Contrastes : vérification mathématique des couleurs choisies. Vert du grand titre Missions #397b42 sur gris clair #f5f6f4 : 4,74:1. Texte des cartes sur vert au survol : 6,15:1. Le vert des petits textes est plus soutenu (#286233). L’accent jaune du texte « Parlons-en. » utilise #776000, lisible à cette grande taille sur le fond vert clair.
- JavaScript : vérification de syntaxe des scripts main.js et contact.js réussie.
- Formulaire : tests automatisés de la logique avec DOM et réseau simulés. Validation des champs requis, e-mail invalide, POST et champs inclus, succès, réponses 400/403/429/500, erreur réseau, interruption pour délai dépassé, champ piège et double clic : tests réussis. Les erreurs ne vident pas le formulaire. La confirmation ne s’affiche que si le service répond avec succès.
- Sans endpoint Formspree : message explicite, bouton désactivé, aucune requête envoyée. Les liens e-mail et téléphone sont disponibles. Sans JavaScript, le bouton reste désactivé et les moyens de contact directs sont indiqués.
- Chemins de publication : chemins locaux relatifs, aucune URL localhost ; index.html à la racine de l’archive, compatible avec le domaine GitHub Pages communiqué.

## Responsive prévu dans le CSS

Ce tableau décrit les colonnes définies par les règles CSS. Il ne constitue pas une mesure du rendu dans un navigateur.

| Largeur de fenêtre | Missions | Bâtiments | Menu |
| --- | --- | --- | --- |
| 320 px | 1 colonne | 1 colonne | Menu repliable |
| 375 px | 1 colonne | 1 colonne | Menu repliable |
| 430 px | 1 colonne | 1 colonne | Menu repliable |
| 640 px, fenêtre réduite | 2 colonnes | 2 colonnes | Menu repliable |
| 768 px | 2 colonnes | 2 colonnes | Menu repliable |
| 1024 px | 3 colonnes | 3 colonnes | Menu horizontal |
| 1280 px | 5 colonnes | 3 colonnes | Menu horizontal |
| 1440 px | 5 colonnes | 3 colonnes | Menu horizontal |

Images : largeur de 100 % de leur conteneur, ratio constant, object-fit: cover. Titres fluides, champs de formulaire de 16 px minimum, navigation et coordonnées avec zones de contact confortables. Les cartes peuvent recevoir le focus clavier ; un toucher les met au focus pour afficher le même fond que lors d’un survol. Toutes leurs informations sont présentes sans interaction.

## Limites et validations restant nécessaires

**Le rendu visuel et l’absence effective de débordement horizontal n’ont pas pu être validés dans un navigateur.** Le navigateur cloud a refusé l’accès au serveur local et aux fichiers locaux. Le navigateur local n’a pas pu démarrer dans l’environnement disponible. Les contrôles de responsive ci-dessus portent donc sur le code, et non sur des captures d’écran ni des mesures réelles du DOM. Les états hover/focus, le menu mobile, les positions d’arrivée des ancres et le comportement portrait/paysage restent à contrôler visuellement.

**L’envoi réel et la réception à contact@nf-ingenierie.fr restent à valider après activation de Formspree**, décrite dans README.md. Les essais effectués utilisent des réponses simulées et ne prouvent pas la livraison d’un e-mail réel. Aucun message de test n’a été envoyé à votre adresse.

Après activation et avant publication définitive, ouvrir les pages aux largeurs 320, 375, 430, 640, 768, 1024 et 1280 px, puis en paysage ; vérifier le menu, les ancres, les images, la lisibilité, le formulaire et l’absence de défilement horizontal. Envoyer un vrai message de test et vérifier sa réception.
