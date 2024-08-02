document.addEventListener("DOMContentLoaded", function () {
  let tempo = 0; // tempo em segundos
  const display = document.getElementById("timer");

  function formatarTempo(segundos) {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const segundosRestantes = String(segundos % 60).padStart(2, "0");
    return `${horas}:${minutos}:${segundosRestantes}`;
  }

  function atualizarCronometro() {
    tempo++;
    display.textContent = formatarTempo(tempo);
  }

  setInterval(atualizarCronometro, 1000); // Atualiza a cada 1 segundo
});
