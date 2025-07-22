const miembros = [
  "RicardoBTC",
  "Cuenta Secundaria"
];

// Este evento modifica qué mensajes son leídos
window.addEventListener("onEventReceived", function (obj) {
  const d = obj.detail;
  if (!d || !d.message || !d.name) return;

  const esMiembro = miembros.includes(d.name.trim());

  // IMPORTANTE: prevenir lectura forzada
  if (!esMiembro) {
    // Anula el contenido leído para impedir TTS
    d.message = "";  
    d.tts = false;
  }
});
