const miembros = [
  "RicardoBTC",
  "Cuenta Secundaria"
];

window.addEventListener("onEventReceived", function (obj) {
  const d = obj.detail;
  if (!d || !d.message || !d.name) return;

  // Verifica si el nombre visible coincide exactamente con la lista
  const esMiembro = miembros.includes(d.name.trim());
  
  // Si NO es miembro, desactiva la voz
  if (!esMiembro) {
    d.tts = false;
  }
});
