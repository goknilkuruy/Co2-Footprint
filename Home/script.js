// bereinigt Benutzereingaben, um XSS-Angriffe zu verhindern
function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// wird beim Abschicken des Formulars ausgelöst, validiert und bereinigt die Eingaben.
function validateForm(event) {
  event.preventDefault(); // verhindert das tatsächliche Absenden des Formulars

  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  // Vorherige Meldung leeren
  formMessage.textContent = "";

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // prüfen ob beide Felder gefüllt sind
  if (!email || !message) {
    formMessage.textContent = "Bitte alle Felder ausfüllen.";
    formMessage.classList.remove("text-success");
    formMessage.classList.add("text-danger");
    return false;
  }

  // eingaben bereinigen //
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Optionale Debug Ausgabe //
  console.log("Bereinigte E-Mail:", sanitizedEmail);
  console.log("Bereinigte Nachricht:", sanitizedMessage);

  // Erfolgsnachricht für die Nutzerin oder den Nutzer //
  formMessage.textContent = "Vielen Dank für Ihre Nachricht!";
  formMessage.classList.remove("text-danger");
  formMessage.classList.add("text-success");

  return false; // Formular absichtlich nicht absenden (Demo-Zweck)
}





