const miembros = [
  "RicardoBTC",
  "CuentaSecundaria"
];

window.addEventListener("onEventReceived", function (obj) {
  const d = obj.detail;
  if (!d?.message || !d.nick) return;
  if (!miembros.includes(d.nick)) {
    d.tts = false; // Desactiva voz
  }
});
