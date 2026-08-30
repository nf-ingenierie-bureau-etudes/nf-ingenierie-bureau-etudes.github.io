/* =========================================================
   NF INGÉNIERIE — FORMULAIRE DE CONTACT
   ---------------------------------------------------------
   GitHub Pages n'exécute aucun code serveur. Ce script ne prétend donc
   jamais « envoyer » un message : il prépare un e-mail dans le logiciel
   de messagerie du visiteur grâce au protocole mailto:.
   ========================================================= */

const contactForm = document.getElementById("contactForm");

/**
 * Lit la valeur d'un champ, supprime les espaces inutiles et renvoie
 * une chaîne vide si le champ n'existe pas. Cela garde le code robuste
 * si le formulaire est modifié plus tard.
 */
function getFieldValue(id) {
  const field = document.getElementById(id);
  return field ? field.value.trim() : "";
}

/**
 * Construit puis ouvre l'e-mail prérempli.
 * Les contenus saisis sont encodés avant d'être placés dans l'URL afin
 * de préserver les accents, retours à la ligne et caractères spéciaux.
 */
function prepareEmail(event) {
  event.preventDefault();

  const name = getFieldValue("name");
  const email = getFieldValue("email");
  const subject = getFieldValue("subject") || "Demande de contact";
  const message = getFieldValue("message");
  const status = document.getElementById("formStatus");

  const emailBody = [
    `Nom / Société : ${name}`,
    `Adresse e-mail : ${email}`,
    "",
    "Message :",
    message
  ].join("\n");

  if (status) {
    status.textContent =
      "Votre logiciel de messagerie va s’ouvrir. Le site n’enregistre pas votre message.";
  }

  const mailtoUrl =
    `mailto:contact@nf-ingenierie.fr?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(emailBody)}`;

  window.location.href = mailtoUrl;
}

if (contactForm) {
  contactForm.addEventListener("submit", prepareEmail);
}
