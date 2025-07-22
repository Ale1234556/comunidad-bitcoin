const miembros = [
  "Cuenta Secundaria",
  "RicardoBTC"
];

window.addEventListener("onEventReceived", function (obj) {
  if (!obj || !obj.detail) return;

  const d = obj.detail;
  const esMiembro = miembros.includes(d.nick);

  // Solo permite TTS si es miembro
  d.tts = esMiembro;
});
