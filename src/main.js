// Conversor de moeda real para dólar

// Elementos
const dolarEmReal = document.getElementById("dolarEmReal");
const bitEmReal = document.getElementById("bitEmReal");
const moeda = document.getElementById("moeda");
const resultText = document.getElementById("result");

// Cotações
const cotDolar = 5.23;
const cotBit = 551654;

function calcCurrency() {
  let text;
  if (moeda.value !== "") {
    if (dolarEmReal.checked) {
      text = conversorDeMoedaParaReal(moeda.value, cotDolar);
    } else if (bitEmReal.checked) {
      text = conversorDeMoedaParaReal(moeda.value, cotBit);
    } else {
      text = "Selecione qual conversão deseja fazer";
    }
  } else {
    text = "Digite o valor em real a ser convertido";
  }
  resultText.innerHTML = text;
}

function conversorDeMoedaParaReal(valorMoeda, cotacao) {
  let resultValue = Number((valorMoeda * cotacao).toFixed(2));
  return "O resultado em real é R$ " + resultValue;
}

document
  .getElementById("currencyButton")
  .addEventListener("click", calcCurrency);

document.getElementById("clear").addEventListener("click", function () {
  resultText.innerHTML = "";
});
