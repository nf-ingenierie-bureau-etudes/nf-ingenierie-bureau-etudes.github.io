/* ===== AFFICHAGE DES SECTIONS ===== */
function showSection(id, updateHash = false) {
  const section = document.getElementById(id);
  if (!section || !section.classList.contains("content")) return;

  document.querySelectorAll(".content").forEach(sec => {
    sec.classList.remove("active");
  });

  section.classList.add("active");

  if (updateHash) {
    history.replaceState(null, "", `#${id}`);
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Boutons du menu
 document.querySelectorAll("nav button[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    showSection(btn.dataset.target, true);
  });
});

// Logo → retour page d'accueil
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", () => {
    showSection("missions-home", true);
  });
}

/* ===== MISSIONS : SUR PAGE D'ACCUEIL ===== */
document.querySelectorAll(".mission-card[data-mission]").forEach(card => {
  card.addEventListener("click", () => {
    showSection(card.dataset.mission, true);
  });
});

/* ===== INIT : AFFICHER LA SECTION DEMANDÉE OU L'ACCUEIL ===== */
window.addEventListener("DOMContentLoaded", () => {
  const requested = window.location.hash.slice(1);
  const requestedSection = requested ? document.getElementById(requested) : null;
  const initialSection = requestedSection?.classList.contains("content")
    ? requested
    : "missions-home";

  showSection(initialSection, false);
});

window.addEventListener("hashchange", () => {
  const requested = window.location.hash.slice(1);
  if (requested) showSection(requested, false);
});
