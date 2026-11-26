
const faixas = document.querySelectorAll(".faixa");
const status = document.getElementById("status");
const vencedorTexto = document.getElementById("vencedor");

let corridaAtiva = false;

function novaCorrida() {
  if (corridaAtiva) return;

  corridaAtiva = true;
  vencedorTexto.textContent = "";
  status.textContent = "🏁 CORRIDA EM ANDAMENTO!";

  let posicoes = [0, 0, 0, 0, 0];
  let velocidades = faixas.map(() => Math.random() * 4 + 2);

  faixas.forEach((carro, i) => {
    carro.style.transform = "translateX(0px)";
  });

  const pista = document.getElementById("pista");
  const distancia = pista.clientWidth - 100;

  const intervalo = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      posicoes[i] += velocidades[i] * Math.random();

      faixas[i].style.transform =
        `translateX(${Math.min(posicoes[i], distancia)}px)`;

      if (posicoes[i] >= distancia) {
        clearInterval(intervalo);

        corridaAtiva = false;

        status.textContent = "🏆 TEMOS UM CAMPEÃO!";

        vencedorTexto.textContent =
          `🏆 CARRO ${i + 1} VENCEU A CORRIDA!`;

        return;
      }
    }
  }, 50);
}
