(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const requiredFields = [...form.querySelectorAll('[required]')];
    let firstInvalid = null;

    requiredFields.forEach(field => {
      const invalid = !field.checkValidity();
      field.setAttribute('aria-invalid', String(invalid));
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      if (status) status.textContent = 'Merci de compléter les champs obligatoires.';
      firstInvalid.focus();
      return;
    }

    const name = document.getElementById('name')?.value.trim() || '';
    const company = document.getElementById('company')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const subject = document.getElementById('subject')?.value.trim() || 'Demande de contact';
    const message = document.getElementById('message')?.value.trim() || '';

    const body = [
      `Nom : ${name}`,
      `Société / organisme : ${company || 'Non renseigné'}`,
      `Email : ${email}`,
      `Nature de la demande : ${subject}`,
      '',
      'Projet / message :',
      message
    ].join('\n');

    if (status) status.textContent = 'Ouverture de votre logiciel de messagerie…';

    window.location.href = `mailto:contact@nf-ingenierie.fr?subject=${encodeURIComponent(`Projet NF Ingénierie — ${subject}`)}&body=${encodeURIComponent(body)}`;
  });

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
    field.addEventListener('change', () => field.removeAttribute('aria-invalid'));
  });
})();
