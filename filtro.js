const miembros = [
  "RicardoBTC",
  "Cuenta Secundaria"
];

window.addEventListener("onEventReceived", function (obj) {
  const d = obj.detail;
  if (!d?.message || !d.nick) return;
  d.tts = miembros.includes(d.nick);
});
