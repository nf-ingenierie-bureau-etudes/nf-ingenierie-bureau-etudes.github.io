const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const subjectField = document.getElementById("subject");
    const subject = subjectField?.value.trim() || "Demande de contact";
    const message = document.getElementById("message")?.value.trim() || "";
    const status = document.getElementById("formStatus");

    const body = [
      `Nom / Société : ${name}`,
      `Email : ${email}`,
      "",
      message
    ].join("\n");

    if (status) {
      status.textContent = "Ouverture de votre logiciel de messagerie…";
    }

    window.location.href =
      `mailto:contact@nf-ingenierie.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
