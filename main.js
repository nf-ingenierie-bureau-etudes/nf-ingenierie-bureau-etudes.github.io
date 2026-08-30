/* =========================================================
   NF INGÉNIERIE — INTERACTIONS GÉNÉRALES
   ---------------------------------------------------------
   Ce fichier reste volontairement court : la mise en page,
   les effets visuels et le défilement sont gérés par CSS.
   JavaScript ne sert ici qu'au menu mobile et à l'année du footer.
   ========================================================= */

/**
 * Ouvre ou ferme le menu principal sur petit écran.
 * La fonction synchronise aussi aria-expanded et aria-label pour que
 * l'état du menu soit compréhensible par les technologies d'assistance.
 */
function setMobileMenu(open) {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  // La fonction quitte proprement si la page ne contient pas ces éléments.
  if (!menuButton || !navigation) return;

  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Fermer le menu principal" : "Ouvrir le menu principal"
  );
}

/**
 * Initialise le menu mobile et les comportements de fermeture utiles :
 * clic sur un lien, touche Échap ou retour à un écran large.
 */
function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileMenu(false);
  });

  // Le menu mobile est refermé si l'utilisateur agrandit sa fenêtre.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) setMobileMenu(false);
  });
}

/**
 * Met à jour automatiquement l'année du copyright.
 * Cette petite amélioration évite d'avoir à modifier le HTML chaque année.
 */
function updateCopyrightYear() {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

//
// La classe « menu-enhanced » n'existe que lorsque JavaScript fonctionne.
// Sans JavaScript, la navigation mobile reste donc visible et utilisable.
document.body.classList.add("menu-enhanced");

// Le DOM est déjà disponible car le script est chargé en fin de page.
initMobileNavigation();
updateCopyrightYear();
