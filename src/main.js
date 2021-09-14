function calcGrade() {
  // Notas bimestrais
  var bim1 = Number(document.getElementById("bim1").value);
  var bim2 = Number(document.getElementById("bim2").value);
  var bim3 = Number(document.getElementById("bim3").value);
  var bim4 = Number(document.getElementById("bim4").value);

  // Soma das notas bimestrais
  var notaAnual = bim1 + bim2 + bim3 + bim4;

  // Média das notas bimestrais
  var media = notaAnual / 4;

  // Arredondamento da média para uma casa decimal
  var mediaFinal = Number(media.toFixed(1));

  // Desafio do Guilherme
  // Verificando a situação final do aluno
  var situacao;

  // Média mínima exigida para aprovação
  var mediaMinima = 6;

  // Verifica se a média final é menor do que a média mínima
  if (mediaFinal < mediaMinima) {
    // caso seja, então a situação é Reprovado
    situacao = "reprovado por não atingir a média " + mediaMinima;
  } else {
    // caso contrário, ou seja, caso a média final seja maior ou igual à média mínima, a situação é Aprovado
    situacao = "aprovado";
  }

  var text = "Sua média final é " + mediaFinal + ". Você foi " + situacao + ".";
  document.getElementsByClassName("final-grade")[0].innerHTML = text;

  // Desafio do Paulo
  console.log(
    "Sua média final é " +
      Number(((bim1 + bim2 + bim3 + bim4) / 4).toFixed(1)) +
      "."
  );
}

document.getElementById("calcButton").addEventListener("click", calcGrade);
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementsByClassName("final-grade")[0].innerHTML = "";
});

// Desafio da Rafa
// Conversor de temperatura celsius para fahrenheit
function calcTemperature() {
  // Temperaturas
  const fahr = document.getElementById("fahrenheit");
  const cels = document.getElementById("celsius");

  if (fahr.value !== "" && cels.value === "") {
    cels.value = Number(((fahr.value - 32) / (9 / 5)).toFixed(1));
  } else if (cels.value !== "" && fahr.value === "") {
    fahr.value = Number((cels.value * (9 / 5) + 32).toFixed(1));
  }
}

document
  .getElementById("tempButton")
  .addEventListener("click", calcTemperature);

// Conversor de moeda real para dólar
function calcCurrency() {
  // Moedas
  const brl = document.getElementById("real");
  const usd = document.getElementById("dolar");
  const cot = 5.23; // cotação do dólar no dia 13-09-2021

  if (brl.value !== "" && usd.value === "") {
    usd.value = Number((brl.value / cot).toFixed(2));
  } else if (usd.value !== "" && brl.value === "") {
    brl.value = Number((usd.value * cot).toFixed(2));
  }
}

document
  .getElementById("currencyButton")
  .addEventListener("click", calcCurrency);
